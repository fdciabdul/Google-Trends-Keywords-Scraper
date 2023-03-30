const fs = require("fs");
const Parser = require('rss-parser');
const parser = new Parser();
const format = require("date-format");
const xml2js = require('xml2js');

module.exports = async (data) => {
  let list = data.slice(0, -1);

  let tableData = '| Country | Keyword | Last Update |\n| --- | --- | --- |\n';

  for (let item of list) {
    let [name, code] = item.split('=');
    name = name.replace("_", " ");

    const url = `https://trends.google.com/trends/hottrends/atom/feed?pn=${code}`;
    const feed = await parser.parseURL(url);
    console.log(feed);
    const x = feed.items.map(el => ({
      title: el.title,
      link: el.link,
      pubdate: el.pubDate,
      approxtraffic: el["ht:approx_traffic"]
    }));

    const thiskeyword = feed.items.map(el => el.title);
    const res = {
      lastUpdate: format("dd-MM-yyyy , hh:mm:ss"),
      data: x
    };

    const keywordString = thiskeyword.join(', ');

    tableData += `| ${name} | ${keywordString} | ${res.lastUpdate} |\n`;

    fs.writeFileSync(`./data/${name}.json`, JSON.stringify(res, null, 2));
    fs.writeFileSync(`./forcopied/${name}.txt`, thiskeyword.toString(), "UTF-8");
  }

  fs.writeFileSync("./README.MD", `
## Google Trends Keywords Scraper

Last Update ${format("dd-MM-yyyy , hh:mm:ss")}
Country List:

${tableData}
© Abdul Muttaqin
`, 'UTF-8', {
    'flags': 'w+'
  });

  return "Data has been written";
}
