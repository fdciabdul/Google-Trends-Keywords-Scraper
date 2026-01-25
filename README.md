
# 🌎 Global Google Trends Scraper
![Last Updated](https://img.shields.io/badge/Last%20Updated-2026/01/25-blue)
![Countries](https://img.shields.io/badge/Countries-10-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour using the official Google Trends RSS feeds.

## 🔍 Latest Trends
Last Update: **2026-01-25 23:11:27**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|
| Algeria | [بنك التنمية المحلية](https://imtaqin.id/), [milan ac](https://imtaqin.id/), [ألافيس ضد ريال بتيس](https://imtaqin.id/), [progres](https://imtaqin.id/), [alexander arnold](https://imtaqin.id/), [deportivo alavés – betis](https://imtaqin.id/), [روما ضد ميلان](https://imtaqin.id/), [trump](https://imtaqin.id/), [lille – strasbourg](https://imtaqin.id/), [crb](https://imtaqin.id/) | 2026-01-25 23:08:41 |
| Denmark | [super bowl 2026](https://imtaqin.id/), [mette marit](https://imtaqin.id/), [bad bunny](https://imtaqin.id/), [roma - milan](https://imtaqin.id/), [andy schmid](https://imtaqin.id/), [death valley](https://imtaqin.id/), [island sverige håndbold](https://imtaqin.id/), [ursula von der leyen](https://imtaqin.id/), [mikael bertelsen](https://imtaqin.id/), [united](https://imtaqin.id/) | 2026-01-25 23:09:18 |
| France | [classement top 14 2026](https://imtaqin.id/), [aissa maiga](https://imtaqin.id/), [philippe lacheau](https://imtaqin.id/), [super bowl 2026](https://imtaqin.id/), [stephanie rist](https://imtaqin.id/), [vigilance jaune neige verglas](https://imtaqin.id/), [elections legislatives partielles](https://imtaqin.id/), [dispositif jeanbrun](https://imtaqin.id/), [auschwitz](https://imtaqin.id/), [timberwolves – warriors](https://imtaqin.id/) | 2026-01-25 23:09:32 |
| India | [timberwolves vs warriors](https://imtaqin.id/), [nfl](https://imtaqin.id/), [t20 world cup ind vs nz](https://imtaqin.id/), [xm](https://imtaqin.id/), [chester bennington](https://imtaqin.id/), [samantha](https://imtaqin.id/), [mirzapur](https://imtaqin.id/), [srk](https://imtaqin.id/), [emily armstrong](https://imtaqin.id/), [bitcoin](https://imtaqin.id/) | 2026-01-25 23:09:46 |
| Latvia | [арсенал – манчестер юнайтед](https://imtaqin.id/), [futsal euro 2026](https://imtaqin.id/), [барселона – реал овьедо](https://imtaqin.id/), [kas jauns](https://imtaqin.id/) | 2026-01-25 23:10:09 |
| Mexico | [drake maye](https://imtaqin.id/), [millonarios - junior](https://imtaqin.id/), [donde sera el super bowl 2026](https://imtaqin.id/), [jennifer aniston](https://imtaqin.id/), [seattle weather](https://imtaqin.id/), [cruz azul vs atlas amistoso](https://imtaqin.id/), [america femenil](https://imtaqin.id/), [futbol americano hoy](https://imtaqin.id/), [nueva inglaterra](https://imtaqin.id/), [royal caribbean](https://imtaqin.id/) | 2026-01-25 23:10:15 |
| New Zealand | [timberwolves vs warriors](https://imtaqin.id/), [spruce goose](https://imtaqin.id/), [nfl](https://imtaqin.id/), [pga](https://imtaqin.id/), [bbc sport](https://imtaqin.id/), [epl table](https://imtaqin.id/), [man united](https://imtaqin.id/), [premier league standings](https://imtaqin.id/), [countdown](https://imtaqin.id/), [australia day 2026](https://imtaqin.id/) | 2026-01-25 23:10:24 |
| Spain | [drake maye](https://imtaqin.id/), [super bowl 2026](https://imtaqin.id/), [millonarios - junior](https://imtaqin.id/), [irlanda](https://imtaqin.id/), [aemet](https://imtaqin.id/), [juan soto ivars](https://imtaqin.id/), [timberwolves - warriors](https://imtaqin.id/), [five eleven capital](https://imtaqin.id/), [belfast](https://imtaqin.id/), [carla simon](https://imtaqin.id/) | 2026-01-25 23:11:01 |
| Ukraine | [серія a](https://imtaqin.id/), [юхим конопля](https://imtaqin.id/), [лілль – страсбур](https://imtaqin.id/), [алавес – реал бетіс](https://imtaqin.id/), [weather tomorrow](https://imtaqin.id/), [анна саламаха](https://imtaqin.id/), [аль-ріяд – аль-хіляль](https://imtaqin.id/), [рома – милан](https://imtaqin.id/), [рома – мілан](https://imtaqin.id/), [hltv](https://imtaqin.id/) | 2026-01-25 23:11:19 |
| Vietnam | [iphone 18 pro](https://imtaqin.id/), [kết quả bóng đá anh](https://imtaqin.id/), [nfl](https://imtaqin.id/), [losc đấu với strasbourg](https://imtaqin.id/), [ac milan](https://imtaqin.id/), [alavés đấu với betis](https://imtaqin.id/), [roma đấu với milan](https://imtaqin.id/), [napoli](https://imtaqin.id/), [as roma](https://imtaqin.id/), [benfica](https://imtaqin.id/) | 2026-01-25 23:11:23 |

## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- `./data/{country}.json` - Complete trend data with traffic counts and related news
- `./forcopied/{country}.txt` - Simple list of trending keywords
- `./all/all.json` - Combined data from all countries in a single JSON file

## 🔄 Data Source
Data is sourced directly from Google Trends RSS feeds: `https://trends.google.com/trending/rss?geo={COUNTRY_CODE}&hours=48`

## 📝 License
© 2026 - All Rights Reserved
