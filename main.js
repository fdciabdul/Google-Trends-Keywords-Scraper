const getData = require("./utils/getData")
const fs = require("fs");
var list = fs.readFileSync("id.txt",'utf8');
let data = list.split("\n");
console.log(data);
getData(data);
