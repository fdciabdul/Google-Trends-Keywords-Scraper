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

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bagussatoto">
        <img src="https://github.com/bagussatoto.png" width="100px;" alt="Bagus Budi Satoto"/><br />
        <sub><b>Bagus Budi Satoto</b></sub>
      </a><br />
      <sub>Maintainer / Lead Dev</sub>
    </td>
    <td align="center">
      <a href="https://github.com/bagussatoto1">
        <img src="https://github.com/bagussatoto1.png" width="100px;" alt="Bagus Satoto 1"/><br />
        <sub><b>Bagus Satoto 1</b></sub>
      </a><br />
      <sub>Contributor</sub>
    </td>
    <td align="center">
      <a href="https://github.com/taqiin">
        <img src="https://github.com/taqiin.png" width="100px;" alt="taqin"/><br />
        <sub><b>taqin</b></sub>
      </a><br />
      <sub>Contributor</sub>
    </td>
  </tr>
</table>
\`, 'UTF-8', {
    'flags': 'w+'
  });

  return "Data has been written";
}
