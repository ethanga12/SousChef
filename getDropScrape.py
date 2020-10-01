from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
import csv
import urllib
import requests
import pandas
import httplib2

#no_of_pagedowns = 1000 # in the event there is infinite scrolling functionality

driver = webdriver.Chrome(ChromeDriverManager().install())
chrome_options = Options()
chrome_options.add_argument("--disable-infobars")
chrome_options.add_argument("--start-maximized")
driver.get("https://getdrop.com/recipes/")
time.sleep(1)

# elem = driver.find_element_by_tag_name("body")
# while no_of_pagedowns > 0:
#     elem.send_keys(Keys.PAGE_DOWN)
#
#     time.sleep(.1)
#     no_of_pagedowns -=1

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
links = []
for link in soup.find_all('div', class_="work-info"):
    if not link.find('a') == None:
        links.append(link.find('a').get('href'))
recipeLinks = []
category = ['CATEGORY']
for i in links:
    chrome_options = Options()
    chrome_options.add_argument("--diable-infobars")
    chrome_options.add_argument("--start-maximized")
    driver.get(i)
    time.sleep(3)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    for link in soup.find_all('div', class_="work-info"):
        category.append(soup.find('h1').get_text())
        if not link.find('a') == None:
            recipeLinks.append(link.find('a').get('href'))
prepTime = ['PREP TIME']
serves = ['SERVES']
cals = ['CALORIES']
ingredients = ['INGREDIENTS']
measurements = ['MEASUREMENTS']
tools = ['TOOLS']
instructions = ['INSTRUCTIONS']
descriptions = ['DESCRIPTIONS']
name = ['NAME']
for i in recipeLinks:
    chrome_options = Options()
    chrome_options.add_argument("--diable-infobars")
    chrome_options.add_argument("--start-maximized")
    driver.get(i)
    time.sleep(3)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    zippedIngredients = []
    zippedMeasurements = []
    name.append(soup.find('h1').get_text())
    descriptions.append(soup.find('p', class_='Description-text').get_text())
    instructions.append(soup.find('section', class_='StepPreview').get_text())
    for i in range(len(soup.find_all('dd', class_='InfoList-value'))):
        if i == 0:
            prepTime.append(soup.find_all('dd', class_='InfoList-value')[i].get_text())
        elif i == 1:
            serves.append(soup.find_all('dd', class_='InfoList-value')[i].get_text())
        elif i == 2:
            cals.append(soup.find_all('dd', class_='InfoList-value')[i].get_text())
        else:
            zippedMeasurements.append(soup.find_all('dd', class_='InfoList-value')[i].get_text())
    for i in range(len(soup.find_all('dt', class_="InfoList-key"))):
        if i > 2:
            zippedIngredients.append(soup.find_all('dd', class_='InfoList-value')[i].get_text())
    measurements.append(zippedMeasurements)
    ingredients.append(zippedIngredients)
driver.quit()
# print(recipeLinks)
# print(prepTime)
# print(serves)
# print(cals)
# print(ingredients)
# print(measurements)
# print(descriptions)
# print(instructions)

allRows = zip(name, prepTime, serves, cals, ingredients, measurements, descriptions, instructions)
with open('GETDROP DATA.csv', 'w', newline='') as fp:
    a = csv.writer(fp)
    for row in allRows:
        a.writerow(row)
