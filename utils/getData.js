const fs = require("fs");
const Parser = require('rss-parser');
const parser = new Parser();
const format = require("date-format");


module.exports = async (data) =>
{
  let list = data.slice(0, -1);
  console.log(data)
  let str;
  for (var i = 0; i < list.length; i++)
  {
    let code = list[i].split("=")[1];
    let name = list[i].split("=")[0].replace("_", " ");

    const url = 'https://trends.google.com/trends/hottrends/atom/feed?pn=' + code;
    const feed = await parser.parseURL(url);
    const x = feed.items.map(el => [
    {
      title: el.title,
      link: el.link,
      pubdate: el.pubDate,
      approxtraffic: el["ht:approx_traffic"]
    }]);
    const thiskeyword = feed.items.map(el => [el.title]);
    const res = {
      lastUpdate: format("dd-MM-yyyy , hh:mm:ss"),
      data: x
    }

    console.log(x.toString());

    str += "| " + name + " | " + x.title + "|";
    fs.writeFileSync("./data/" + name + ".json", JSON.stringify(res, null, 2), res)
    fs.writeFileSync("./forcopied/" + name + ".txt", thiskeyword.toString(), "UTF-8")

    fs.readdirSync("./data/").forEach(file =>
    {
      console.log(file);

      fs.writeFileSync("./README.MD", `

## Google Trends Keywords Scraper 
 
Last Update ${format("dd-MM-yyyy , hh:mm:ss")}

Country List :
${file}



© Abdul Muttaqin 
`, 'UTF-8',
      {
        'flags': 'w+'
      })

    });
  }


  return " data Has been writed";
}
