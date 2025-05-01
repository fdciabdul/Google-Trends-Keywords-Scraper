const fs = require("fs");
const axios = require("axios");
const format = require("date-format");
const xml2js = require("xml2js");

module.exports = async (data) => {
  const list = data.filter(item => item.trim() !== '');
  const countriesData = [];
  const allTrendsData = {};
  
  for (const entry of list) {
    const match = entry.trim().match(/^([A-Z]{2})=(.+)$/);
    if (!match) {
      console.log(`Invalid country format: ${entry}`);
      continue;
    }
    
    const countryCode = match[1];
    const countryName = match[2];
    
    try {
      const response = await axios.get(`https://trends.google.com/trending/rss?geo=${countryCode}&hours=48`);
      const xmlData = response.data;
      
      const parser = new xml2js.Parser({ explicitArray: false });
      const result = await parser.parseStringPromise(xmlData);
      
      if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
        console.log(`No trends found for country code: ${countryCode}`);
        continue;
      }
      
      const items = Array.isArray(result.rss.channel.item) 
        ? result.rss.channel.item 
        : [result.rss.channel.item];
      
      const timestamp = format("yyyy-MM-dd hh:mm:ss");
      
      const formattedTrends = items.map(item => {
        let relatedNews = [];
        if (item["ht:news_item"]) {
          const newsItems = Array.isArray(item["ht:news_item"]) 
            ? item["ht:news_item"] 
            : [item["ht:news_item"]];
            
          relatedNews = newsItems.map(news => ({
            title: news["ht:news_item_title"] || "",
            snippet: news["ht:news_item_snippet"] || "",
            url: news["ht:news_item_url"] || "",
            source: news["ht:news_item_source"] || ""
          }));
        }
        
        return {
          title: item.title,
          trafficCount: item["ht:approx_traffic"] || "N/A",
          pubDate: item.pubDate || timestamp,
          picture: item["ht:picture"] || "",
          pictureSource: item["ht:picture_source"] || "",
          relatedSearch: relatedNews,
          link: "https://imtaqin.id/"
        };
      });
      
      const keywords = formattedTrends.map(trend => trend.title);
      const keywordsWithLinks = keywords.map(keyword => 
        `[${keyword}](https://imtaqin.id/)`
      );
      
      const resultData = {
        lastUpdate: timestamp,
        data: formattedTrends
      };
      
      if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data', { recursive: true });
      }
      if (!fs.existsSync('./forcopied')) {
        fs.mkdirSync('./forcopied', { recursive: true });
      }
      if (!fs.existsSync('./all')) {
        fs.mkdirSync('./all', { recursive: true });
      }
      
      fs.writeFileSync(`./data/${countryCode}.json`, JSON.stringify(resultData, null, 2));
      
      fs.writeFileSync(`./forcopied/${countryCode}.txt`, keywords.join(', '), "UTF-8");
      
      countriesData.push({
        name: countryName,
        code: countryCode,
        keywords: keywordsWithLinks.join(', '),
        timestamp
      });
      
      allTrendsData[countryCode] = {
        countryName,
        lastUpdate: timestamp,
        trends: formattedTrends
      };
      
      console.log(`Successfully processed trends for ${countryCode}`);
      
    } catch (error) {
      console.error(`Error fetching trends for ${countryCode}:`, error.message);
    }
  }
  
  const allData = {
    lastUpdate: format("yyyy-MM-dd hh:mm:ss"),
    countries: Object.keys(allTrendsData).length,
    data: allTrendsData
  };
  
  fs.writeFileSync("./all/all.json", JSON.stringify(allData, null, 2));
  
  generateReadme(countriesData);
  
  return "Data has been successfully updated";
};

function generateReadme(countriesData) {
  const timestamp = format("yyyy-MM-dd hh:mm:ss");
  const dateOnly = format("yyyy/MM/dd");
  
  const tableData = countriesData.map(country => 
    `| ${country.name} | ${country.keywords} | ${country.timestamp} |`
  ).join('\n');
  
  const readme = `
# 🌎 Global Google Trends Scraper
![Last Updated](https://img.shields.io/badge/Last%20Updated-${dateOnly}-blue)
![Countries](https://img.shields.io/badge/Countries-${countriesData.length}-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour using the official Google Trends RSS feeds.

## 🔍 Latest Trends
Last Update: **${timestamp}**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|
${tableData}

## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- \`./data/{country}.json\` - Complete trend data with traffic counts and related news
- \`./forcopied/{country}.txt\` - Simple list of trending keywords
- \`./all/all.json\` - Combined data from all countries in a single JSON file

## 🔄 Data Source
Data is sourced directly from Google Trends RSS feeds: \`https://trends.google.com/trending/rss?geo={COUNTRY_CODE}&hours=48\`

## 📝 License
© ${new Date().getFullYear()} - All Rights Reserved
`;
  fs.writeFileSync("./README.md", readme, 'UTF-8');
}
