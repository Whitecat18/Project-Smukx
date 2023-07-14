const foodData = {}; 

function addFood(event) {
  event.preventDefault();

  const foodNameInput = document.getElementById('food-name');
  const foodCaloriesInput = document.getElementById('food-calories');
  const foodName = foodNameInput.value;
  const foodCalories = parseInt(foodCaloriesInput.value);

  if (foodName && foodCalories) {
    foodData[foodName] = foodCalories;

    const foodList = document.getElementById('food-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${foodName}: ${foodCalories} calories`;
    foodList.appendChild(listItem);

    foodNameInput.value = '';
    foodCaloriesInput.value = '';

    updateSummary();
  }
}


let totalDistance = 0; 
let totalCaloriesBurned = 0;

function addExercise(event) {
    event.preventDefault();
    const exerciseNameInput = document.getElementById('exercise-name')
    const exerciseDistanceInput = document.getElementById('exercise-distance');
    const exerciseCaloriesInput = document.getElementById('exercise-calories');
    const exerciseName = exerciseNameInput.value;
    const exerciseDistance = parseFloat(exerciseDistanceInput.value);
    const exerciseCalories = parseInt(exerciseCaloriesInput.value);
  
    if (exerciseDistance && exerciseCalories) {
      totalDistance += exerciseDistance;
      totalCaloriesBurned += exerciseCalories;
  
      const exerciseList = document.getElementById('exercise-list');
      const listItem = document.createElement('li');
      listItem.textContent = `Distance: ${exerciseDistance} km, Calories burned: ${exerciseCalories}, Exercise: ${exerciseName}`;
      exerciseList.appendChild(listItem);
  
      exerciseNameInput.value = '';
      exerciseDistanceInput.value = '';
      exerciseCaloriesInput.value = '';

    updateSummary();
  }
}

function updateSummary() {
  const totalCaloriesElement = document.getElementById('total-calories');
  totalCaloriesElement.textContent = `Total calories: ${calculateTotalCalories()}`;

  const totalDistanceElement = document.getElementById('total-distance');
  totalDistanceElement.textContent = `Total distance: ${totalDistance} km`;

  const totalCaloriesBurnedElement = document.getElementById('total-calories-burned');
  totalCaloriesBurnedElement.textContent = `Total calories burned: ${totalCaloriesBurned}`;
}

function calculateTotalCalories() {
  let totalCalories = 0;
  for (const food in foodData) {
    totalCalories += foodData[food];
  }
  return totalCalories;
}

const foodForm = document.querySelector('.food-form');
foodForm.addEventListener('submit', addFood);

const exerciseForm = document.querySelector('.exercise-form');
exerciseForm.addEventListener('submit', addExercise);
