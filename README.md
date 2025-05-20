
# 🌎 Global Google Trends Scraper
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025/05/20-blue)
![Countries](https://img.shields.io/badge/Countries-0-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour using the official Google Trends RSS feeds.

## 🔍 Latest Trends
Last Update: **2025-05-20 22:55:45**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|


## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- `./data/{country}.json` - Complete trend data with traffic counts and related news
- `./forcopied/{country}.txt` - Simple list of trending keywords
- `./all/all.json` - Combined data from all countries in a single JSON file

## 🔄 Data Source
Data is sourced directly from Google Trends RSS feeds: `https://trends.google.com/trending/rss?geo={COUNTRY_CODE}&hours=48`

## 📝 License
© 2025 - All Rights Reserved
