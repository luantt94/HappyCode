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
print(driver.title)
print(driver.current_url)
 
for k in range(1000):
    file_log = os.path.abspath("idioms.txt")
    f = open(file_log, "a")
    
    try:
        ls = driver.find_elements(By.CLASS_NAME, "idioms__listItem")
        for i in ls:
            i.click()
            time.sleep(3)
            txt = driver.find_element(By.CLASS_NAME, "idioms__idiomDetailsW").text
            f.write(txt)
            f.write("\n\n")
            print(txt)
    except:
        pass
    f.write("\n")
    f.write("\n")
    f.close()
driver.close()