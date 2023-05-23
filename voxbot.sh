#!/usr/bin/env bash

echo "Warning !"
echo "VoxBoT Has to Download more than 10 GB of Model data and 8 GB of Speech Model Datas"
echo " "
read -p "Do you want to continue? (y/n): " choice

if [[ $choice == "y" || $choice == "yes" ]]; then
    sudo apt update
    sudo apt install curl
    pip install git+https://github.com/smukx/voxbot
    pip uninstall -y torch torchvision torchaudio
    pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu118
    echo "VoxBoT Has been successfully installed"
    echo "For More Information Visit : https://github.com/Whitecat18/VoxBot-Ai"
    
else
    echo "The Session Has been terminated"
    
fi
    
