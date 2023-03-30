const fs = require("fs");
const Parser = require('rss-parser');
const parser = new Parser();
const format = require("date-format");

module.exports = async (data) => {
  let list = data.slice(0, -1);

  let str = '';

  for (let item of list) {
    let [name, code] = item.split('=');
    name = name.replace("_", " ");

    const url = `https://trends.google.com/trends/hottrends/atom/feed?pn=${code}`;
    const feed = await parser.parseURL(url);

    const x = feed.items.map(el => ({
      title: el.title,
      link: el.link,
      pubdate: el.pubDate,
      approxtraffic: el.ht:news_item_snippet
    }));

    const thiskeyword = feed.items.map(el => el.title);
    const res = {
      lastUpdate: format("dd-MM-yyyy , hh:mm:ss"),
      data: x
    };

    str += `| ${name} | ${x.title} |`;

    fs.writeFileSync(`./data/${name}.json`, JSON.stringify(res, null, 2));
    fs.writeFileSync(`./forcopied/${name}.txt`, thiskeyword.toString(), "UTF-8");
  }

  const files = fs.readdirSync("./data/");
  const fileString = files.join('\n');

  fs.writeFileSync("./README.MD", `
## Google Trends Keywords Scraper

Last Update ${format("dd-MM-yyyy , hh:mm:ss")}
Country List :
${fileString}
© Abdul Muttaqin
`, 'UTF-8', {
    'flags': 'w+'
  });

  return "Data has been written";
}
