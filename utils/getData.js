const fs = require("fs");
const Parser = require('rss-parser');
const parser = new Parser();
const format = require("date-format");


module.exports = async (data) => {
let list = data.slice(0, -1);
console.log(data)
var str = '';
for (var i =0; i < list.length; i++){
let code = list[i].split("=")[1];
let name = list[i].split("=")[0].replace("_", " ");

const url = 'https://trends.google.com/trends/hottrends/atom/feed?pn='+ code;
  const feed = await parser.parseURL(url);
  const x = feed.items.map(el => el.title);
  const res = {
     lastUpdate: format("dd-MM-yyyy , hh:mm:ss"),
     data: x
}

console.log(x.toString());
str += `
# ${name}
<details>
<summary>Show </summary>

- ${x.toString().replace(/,/g ,"\n")}
</details>

`
     fs.writeFileSync("./data/"+name+".json", JSON.stringify(res, null, 2), res)
    
}

fs.writeFileSync("./README.MD", `

## Google Trends Keywords Scraper 
 
Last Update ${format("dd-MM-yyyy , hh:mm:ss")}

Country List :

${str}
 
`)
return " data Has been writed";
}
