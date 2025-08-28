
# 🌎 Global Google Trends Scraper
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025/08/28-blue)
![Countries](https://img.shields.io/badge/Countries-2-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour using the official Google Trends RSS feeds.

## 🔍 Latest Trends
Last Update: **2025-08-28 16:55:37**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|
| Côte d'Ivoire | [tiémoko meyliet koné](https://imtaqin.id/), [tirage au sort ligue des champions](https://imtaqin.id/), [inter miami – orlando city](https://imtaqin.id/), [benfica](https://imtaqin.id/), [benfica – fenerbahçe](https://imtaqin.id/), [celta vigo – betis](https://imtaqin.id/), [grimsby – manchester united](https://imtaqin.id/), [fulham – bristol city](https://imtaqin.id/), [everton – mansfield](https://imtaqin.id/), [oxford united – brighton](https://imtaqin.id/) | 2025-08-28 16:54:22 |
| United States | [kairat almaty](https://imtaqin.id/), [will compton](https://imtaqin.id/), [star wars starfighter](https://imtaqin.id/), [newark airport](https://imtaqin.id/), [bugonia movie](https://imtaqin.id/), [doris burke](https://imtaqin.id/), [emilie kiser](https://imtaqin.id/), [suzan lamens](https://imtaqin.id/), [maria sakkari](https://imtaqin.id/), [kathy griffin](https://imtaqin.id/) | 2025-08-28 16:55:32 |

## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- `./data/{country}.json` - Complete trend data with traffic counts and related news
- `./forcopied/{country}.txt` - Simple list of trending keywords
- `./all/all.json` - Combined data from all countries in a single JSON file

## 🔄 Data Source
Data is sourced directly from Google Trends RSS feeds: `https://trends.google.com/trending/rss?geo={COUNTRY_CODE}&hours=48`

## 📝 License
© 2025 - All Rights Reserved
