import requests
from bs4 import BeautifulSoup
import pandas as pd

url="http://books.toscrape.com/?referrer=grok.com"
page=requests.get(url)
soup=BeautifulSoup(page.text,'html.parser')
print(soup)
