const fs = require("fs");
const Parser = require('rss-parser');
const parser = new Parser();
const format = require("date-format");


module.exports = async (data) => {
let list = data;
console.log(data)
for (var i =0; i < list.length; i++){
let code = list[i].split("=")[1];
let name = list[i].split("=")[0].replace("_", " ");
console.log(list[i]);
const url = 'https://trends.google.com/trends/hottrends/atom/feed?pn='+ code;
  const feed = await parser.parseURL(url);
  const x = feed.items.map(el => el.title);

     fs.writeFileSync("./data/"+name+".json", JSON.stringify(x, null, 2), x)
fs.writeFileSync("./README.MD", `

## Google Trends Keywords Scraper 
 Last Update ${format("dddd, mmmm dS, yyyy, h:MM:ss TT")}

 
`)

}
return " data Has been writed";
}
