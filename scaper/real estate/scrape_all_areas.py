import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random

def scrape_all_areas(areas, pages=5):
    results = []
    
    # Using a common header to avoid being blocked
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    for area in areas:
        print(f"Fetching data for: {area.upper()}")
        for page in range(1, pages + 1):
            # Example URL - you may need to adjust this based on the specific site
            # This template assumes a URL structure like site.com/area?page=1
            url = f"https://www.buyrentkenya.com/flats-apartments-for-rent/{area}?page={page}"
            
            try:
                response = requests.get(url, headers=headers, timeout=10)
                if response.status_code != 200:
                    print(f"  Skipping page {page} (Status: {response.status_code})")
                    break
                
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Logic to find listings (Selectors depend on the specific website)
                # This is a generic example:
                listings = soup.find_all('div', class_='search-result') 
                
                if not listings:
                    # Try a different common selector if the first fails
                    listings = soup.find_all('div', class_='relative')

                for card in listings:
                    title = card.find('h2').text.strip() if card.find('h2') else "N/A"
                    price = card.find('p', class_='price').text.strip() if card.find('p', class_='price') else "N/A"
                    link = card.find('a')['href'] if card.find('a') else "N/A"
                    
                    results.append({
                        "Area": area,
                        "Title": title,
                        "Price": price,
                        "URL": link,
                        "Page": page
                    })
                
                print(f"  Page {page}: Found {len(listings)} listings")
                time.sleep(random.uniform(1, 3)) # Ethics: don't overload the server
                
            except Exception as e:
                print(f"  Error on {area} page {page}: {e}")
                continue

    df = pd.DataFrame(results)
    # Save a backup to CSV automatically
    df.to_csv("nairobi_real_estate_raw.csv", index=False)
    return df