from selenium import webdriver
import os
import time
from selenium.webdriver.common.by import By

#chrome driver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

options = webdriver.ChromeOptions()
# options.add_argument("user-data-dir=C:\\Users\\luantt5\\AppData\\Local\\Google\\Chrome\\User Data\\Default")
#-- Chrome
service_obj = Service("C:\\Users\\ADMIN\\Documents\\chromedriver.exe")
driver = webdriver.Chrome(service=service_obj, chrome_options=options)

#-- Firefox
# service_obj = Service("/Users/rahulshetty/documents/geckodriver")
# driver = webdriver.Firefox(service=service_obj)

#-- Edge
# service_obj = Service("/Users/rahulshetty/documents/msedgedriver")
# driver = webdriver.Edge(service=service_obj)


# luantt5@english.qts.edu.vn
# Luan@0569

def printText():
    texts = driver.find_element(By.CLASS_NAME, 'css-c5ttww').text.split("\n")
    return texts[0]

driver.maximize_window()
driver.get("https://learn.rosettastone.com/course/read-for-professional-purposes-b2/directing-from-a-distance/1/1")
print(driver.title)
print(driver.current_url)
txt_file = open("log5.txt", "w")
for k in range(1000):
    try:
        count = int(driver.find_element(By.CLASS_NAME, "css-12sc2o5").text.split("/ ")[1].split(" ")[0])
        tempText = ""
        i = 0
        while i < count:
            texts = driver.find_element(By.CLASS_NAME, 'css-c5ttww').text.split("\n")
            if(tempText == texts[0]):
                try:
                    driver.find_element(By.CLASS_NAME, "css-3gyl42").click()
                except:
                    pass
                continue
            i += 1    
            tempText = texts[0]
            for t in texts:
                txt_file.write(t)
                txt_file.write("\n")
                print(t)
            txt_file.write("\n")
            print("\n\n")
            txt_file.flush()
            os.fsync(txt_file.fileno())
            try:
                driver.find_element(By.CLASS_NAME, "css-3gyl42").click()
            except:
                pass
    except:
        pass
txt_file.close
driver.close()
