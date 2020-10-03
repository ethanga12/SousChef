import os, io
from google.cloud import vision
from google.cloud.vision import types

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'/Users/ethanasis/Desktop/SousChef/eco-watch-291322-394e56de3abb.json'
client = vision.ImageAnnotatorClient()

FILE_NAME = 'bigReceipt3.jpg'
FOLDER_PATH = r'/Users/ethanasis/Desktop/SousChef'

with io.open(os.path.join(FOLDER_PATH, FILE_NAME), 'rb') as image_file:
    content = image_file.read()

image = vision.types.Image(content=content)

response = client.text_detection(image=image)

print(response)
