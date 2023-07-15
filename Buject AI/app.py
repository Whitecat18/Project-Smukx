# app.py
from flask import Flask, render_template, request
from bardapi import Bard
import requests
import time

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def expense_analyzer():
    if request.method == 'POST':
        employee_name = request.form['name']
        monthly_salary = float(request.form['salary'])
        food = float(request.form['food'])
        clothes = float(request.form['clothes'])
        shopping = float(request.form['shopping'])
        tax = float(request.form['tax'])
        bills = float(request.form['bills'])
        travel = float(request.form['travel'])
        need_to_save = float(request.form['savings'])

        savings = monthly_salary - food - shopping - clothes - tax - bills - travel

        ques = f"""These are the {employee_name} current Expenses INR. Provide me tips like TIPS 1, TIPS 2.
                  TIP 1: First explain how and where they spend money in simple 2 to 3 lines.
                  TIP 2: Calculate its percentage and give some tips and advice (compulsory) to save money.
                  TIP 3: Tips to save {need_to_save}.

                  My monthly salary: {monthly_salary}
                  My monthly food expenses: {food}
                  My monthly clothes expense: {clothes}
                  My monthly shopping expense: {shopping}
                  My monthly tax expense: {tax}
                  My monthly bills expense: {bills}
                  My monthly traveling cost: {travel}
                  My monthly Expense Savings: {savings}
                  
                  Note: Provide with big and clear answers."""
        
        token = 'YOUR-BARD-API-TOKEN'
        session = requests.Session()
        session.headers = {
            "Host": "bard.google.com",
            "X-Same-Domain": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Origin": "https://bard.google.com",
            "Referer": "https://bard.google.com/",
        }
        
        print("Generating Resources...")
        bard = Bard(token=token, session=session)
        test = bard.get_answer(ques)['content']
        text_format=(f"{test}")
        return render_template('index.html', result=text_format,employee_name=employee_name,savings=savings,monthly_salary=monthly_salary)
        
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

