from selenium import webdriver
import os
import time
# import pyautogui
from selenium.webdriver.common.by import By
 
#chrome driver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
 
options = webdriver.ChromeOptions()
# options.add_argument("user-data-dir=C:\\Users\\luantt5\\AppData\\Local\\Google\\Chrome\\User Data\\Default")
 
service_obj = Service("C:\\Users\\ADMIN\\Documents\\chromedriver.exe")
driver = webdriver.Chrome(service=service_obj, chrome_options=options)
 
# 001000601605
 
driver.maximize_window()
driver.get("https://edtoeic.engdis.com/")

tmp = ""

while 1:
  file_log = os.path.abspath("article.txt")
  f = open(file_log, "a")
  try:
      title = driver.find_elements(By.CLASS_NAME, "magazine__articleTitleW")[0].text
      txt = driver.find_elements(By.CLASS_NAME, "magazine__articleTextW")[0].text
      if tmp != txt:   
        f.write(title)
        f.write("\n")
        f.write(txt)
        f.write("\n\n")
        f.flush()
        print(txt)
        tmp = txt
  except:
      pass
  f.close()

driver.close()

