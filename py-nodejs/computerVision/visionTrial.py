import os, io
from google.cloud import vision
from google.cloud.vision import types
import pandas as pd
import sys
import json
import requests
import re

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'/Users/ethanasis/Desktop/SousChef/eco-watch-291322-394e56de3abb.json'
client = vision.ImageAnnotatorClient()

def detectText(img):

    with io.open(img, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations

    df = pd.DataFrame(columns=['description'])
    for text in texts:
        df = df.append(
            dict(
                description = text.description
            ),
            ignore_index = True
        )
    return df.to_csv('/Users/ethanasis/Desktop/Projects/SousChef/py-nodejs/bigTimeCheck.csv')


#df.to_csv('/Users/ethanasis/Desktop/Projects/SousChef/computerVision/bigReceipt3.csv')

#os.path.join(FOLDER_PATH, FILE_NAME)
# FILE_NAME = 'bigReceipt3.jpg'
# FOLDER_PATH = r'/Users/ethanasis/Desktop/SousChef'
#
# print(detectText(imgLoc))
