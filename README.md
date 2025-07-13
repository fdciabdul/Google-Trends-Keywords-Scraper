
# 🌎 Global Google Trends Scraper
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025/07/13-blue)
![Countries](https://img.shields.io/badge/Countries-9-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour using the official Google Trends RSS feeds.

## 🔍 Latest Trends
Last Update: **2025-07-13 11:28:57**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|
| Albania | [inter miami vs nashville](https://imtaqin.id/) | 2025-07-13 11:28:22 |
| Benin | [inter miami – nashville](https://imtaqin.id/), [vasco da gama – botafogo](https://imtaqin.id/), [flamengo – são paulo](https://imtaqin.id/) | 2025-07-13 11:28:24 |
| Kyrgyzstan | [дандадан](https://imtaqin.id/), [экстремальная жара](https://imtaqin.id/), [интер майами – нэшвилл](https://imtaqin.id/), [челси псж](https://imtaqin.id/), [аббосбек файзуллаев](https://imtaqin.id/), [краснодар – цска москва](https://imtaqin.id/) | 2025-07-13 11:28:41 |
| Lebanon | [إنتر ميامي ضد ناشفيل](https://imtaqin.id/), [inter miami vs nashville](https://imtaqin.id/) | 2025-07-13 11:28:41 |
| Moldova | [краснодар – цска москва](https://imtaqin.id/) | 2025-07-13 11:28:42 |
| Mozambique | [inter miami - nashville sc](https://imtaqin.id/), [inter miami](https://imtaqin.id/), [flamengo - são paulo](https://imtaqin.id/) | 2025-07-13 11:28:43 |
| Slovenia | [inter miami – nashville](https://imtaqin.id/), [amanda anisimova](https://imtaqin.id/), [nk maribor](https://imtaqin.id/) | 2025-07-13 11:28:48 |
| Turkmenistan | [inter miami - nashville](https://imtaqin.id/), [васко да гама – ботафого](https://imtaqin.id/), [интер майами – нэшвилл](https://imtaqin.id/), [фламенго – сан-паулу](https://imtaqin.id/), [ümraniyespor - galatasaray](https://imtaqin.id/), [умраниеспор – галатасарай](https://imtaqin.id/), [краснодар – цска москва](https://imtaqin.id/) | 2025-07-13 11:28:52 |
| Yemen | [إنتر ميامي ضد ناشفيل](https://imtaqin.id/) | 2025-07-13 11:28:56 |

## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- `./data/{country}.json` - Complete trend data with traffic counts and related news
- `./forcopied/{country}.txt` - Simple list of trending keywords
- `./all/all.json` - Combined data from all countries in a single JSON file

## 🔄 Data Source
Data is sourced directly from Google Trends RSS feeds: `https://trends.google.com/trending/rss?geo={COUNTRY_CODE}&hours=48`

## 📝 License
© 2025 - All Rights Reserved
