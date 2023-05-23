#!/usr/bin/env bash

echo "VoxBot is Started Downloading Please Wait"
echo "VoxBoT Has to download more than 10 GB of data and 8 GB of Speech Model"

sudo apt update
sudo apt install curl
pip install git+https://github.com/smukx/voxbot
pip uninstall -y torch torchvision torchaudio
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu118


echo "VoxBoT Has been successfully installed"
