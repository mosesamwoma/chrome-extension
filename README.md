# Web Scraper for House Rent Prediction

A web scraping tool designed to collect real estate rental data for building predictive models. This project automates the extraction of house rental listings to support machine learning applications.

## 📋 Project Overview

This mini-project focuses on gathering rental property data through web scraping. The collected data will be used to develop a **House Rent Prediction Model** that estimates rental prices based on property features.

## 🎯 Current Features

- Web scraping for rental property listings
- Data extraction of property attributes (price, location, size, amenities)
- Data cleaning and preprocessing
- Export to CSV/JSON formats
- Error handling and logging

## 🚀 Coming Soon

### House Rent Prediction Model
A machine learning model to predict rental prices based on property location, bedrooms, bathrooms, square footage, and amenities.

### Web/Mobile Application
An easy-to-use application for:
- **Simple data scraping** with a user-friendly interface
- **No coding required** - point and click interface
- **Real-time predictions** using the trained model
- **Data visualization** of rental trends
- **Export collected data** easily

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/mosesamwoma/web-scraper.git

# Navigate to project directory
cd web-scraper

# Install dependencies
pip install -r requirements.txt
```

## 💻 Usage

```python
from scraper import RentalScraper

# Initialize and scrape
scraper = RentalScraper()
data = scraper.scrape(url="target_website_url")

# Save data
scraper.save_to_csv(data, "rental_data.csv")
```

## 🔮 Future Improvements

- Support for multiple rental websites
- Automated scheduled scraping
- Advanced ML models (Random Forest, XGBoost)
- REST API for price predictions
- Docker containerization for easy deployment
- Cloud deployment (Heroku/AWS)
- Browser extension for quick scraping

## ⚖️ Legal Disclaimer

This tool is for educational purposes. Always respect website Terms of Service, robots.txt files, and implement rate limiting.

## 👨‍💻 Author

**Moses Amwoma**
- GitHub: [@mosesamwoma](https://github.com/mosesamwoma)

---

⭐ **Star this repository** if you find it helpful!

*Stay tuned for the app release!*
