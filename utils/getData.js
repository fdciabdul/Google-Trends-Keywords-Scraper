const fs = require("fs")
const parser = new Parser();


module.exports = async (data) => {
let list = data;
console.log(data)
for (var i =0; i < list.length; i++){
let code = list[i].split("=")[1];
let name = list[i].split("=")[0].replace("_", " ");
console.log(list[i]);
const url = 'https://trends.google.com/trends/hottrends/atom/feed?pn=p1';
  const feed = await parser.parseURL(url);
  const x = feed.items.map(el => el.title);

     fs.writeFileSync("./data/"+name+".json", JSON.stringify(x, null, 2), x)
}
return name+" Has been writed";
}
