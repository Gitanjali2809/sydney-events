from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
import json

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "https://www.eventbrite.com.au/d/australia--sydney/events/"
driver.get(url)
time.sleep(5)  # wait for JavaScript to load

soup = BeautifulSoup(driver.page_source, 'html.parser')

# Find all h3 titles with event names
titles = soup.find_all("h3", class_="event-card__clamp-line--two")

events = []

for title in titles:
    event = {
        "name": title.get_text(strip=True),
        "date": "Unknown",
        "location": "Sydney"
    }
    events.append(event)

# Save to JSON file
with open("events.json", "w", encoding="utf-8") as f:
    json.dump(events, f, indent=2, ensure_ascii=False)

print(f" Scraped and saved events: {len(events)}")

driver.quit()
