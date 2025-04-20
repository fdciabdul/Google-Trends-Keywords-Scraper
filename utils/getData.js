const fs = require("fs");
const axios = require("axios");
const format = require("date-format");

module.exports = async (data) => {
  const list = data.filter(item => item.trim() !== '');
  const countriesData = [];
  
  for (const code of list) {
    const countryCode = code.trim();
    
    try {
      const response = await axios.get(`https://trends.imtaqin.id/gettrend?id=${countryCode}`);
      const trends = response.data;
      
      if (!trends || !trends.length) {
        console.log(`No trends found for country code: ${countryCode}`);
        continue;
      }
      
      const keywords = trends.map(trend => trend.title);
      const timestamp = format("yyyy-MM-dd hh:mm:ss");
      
      const formattedTrends = trends.map(trend => ({
        title: trend.title,
        trafficCount: trend.trafficCount,
        relatedSearch: trend.relatedSearch,
        timestamp
      }));
      
      const resultData = {
        lastUpdate: timestamp,
        data: formattedTrends
      };
      
      fs.writeFileSync(`./data/${countryCode}.json`, JSON.stringify(resultData, null, 2));
      fs.writeFileSync(`./forcopied/${countryCode}.txt`, keywords.join(', '), "UTF-8");
      
      countriesData.push({
        name: countryCode,
        code: countryCode,
        keywords: keywords.join(', '),
        timestamp
      });
      
    } catch (error) {
      console.error(`Error fetching trends for ${name} (${code}):`, error.message);
    }
  }
  
  generateReadme(countriesData);
  
  return "Data has been successfully updated";
}

function generateReadme(countriesData) {
  const timestamp = format("yyyy-MM-dd hh:mm:ss");
  const dateOnly = format("yyyy-MM-dd");
  
  const tableData = countriesData.map(country => 
    `| ${country.name} | ${country.keywords} | ${country.timestamp} |`
  ).join('\n');
  
  const readme = `
# 🌎 Global Google Trends Scraper

![Last Updated](https://img.shields.io/badge/Last%20Updated-${dateOnly}-blue)
![Countries](https://img.shields.io/badge/Countries-${countriesData.length}-green)

## 📊 Overview
This repository contains real-time trending search data from Google Trends across various countries. 
The data is automatically updated every hour.

## 🔍 Latest Trends
Last Update: **${timestamp}**

| Country | Top Keywords | Last Update |
|---------|-------------|-------------|
${tableData}

## 📁 Data Structure
Each country's data is stored in both JSON and plaintext formats:
- \`./data/{country}.json\` - Complete trend data with traffic counts and related searches
- \`./forcopied/{country}.txt\` - Simple list of trending keywords

## 🔄 API Information
Data is sourced from: \`https://trends.imtaqin.id/gettrend?id={COUNTRY_CODE}\`

## 📝 License
© ${new Date().getFullYear()} [Imtaqin.id](https://imtaqin.id) - All Rights Reserved
`;

  fs.writeFileSync("./README.md", readme, 'UTF-8');
}
