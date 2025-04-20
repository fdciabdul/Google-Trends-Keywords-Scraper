const getData = require("./utils/getData");
const fs = require("fs");

async function main() {
  try {
    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }
    
    if (!fs.existsSync("./forcopied")) {
      fs.mkdirSync("./forcopied");
    }
    
    const list = fs.readFileSync("id.txt", 'utf8');
    const data = list.split("\n").filter(line => line.trim() !== '');
    
    console.log(`Processing ${data.length} country codes...`);
    await getData(data);
    console.log("Process completed successfully!");
  } catch (error) {
    console.error("Error in main process:", error);
  }
}

main();
