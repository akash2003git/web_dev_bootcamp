const fs = require("fs");
// import { mkdirSync, writeFileSync } from "fs";

const folderName = process.argv[2] || "Project";

// Async version:
// fs.mkdir("tmp", { recursive: true }, (err) => {
//   console.log("In the callback !");
//   if (err) throw err;
// });
// console.log("After the callback !");

// Sync version:
// fs.mkdirSync("tmp_2");
// console.log("After the callback !");
try {
  mkdirSync(folderName);
  writeFileSync(`${folderName}/index.html`, " ");
  writeFileSync(`${folderName}/styles.css`, " ");
  writeFileSync(`${folderName}/app.js`, " ");
} catch (e) {
  console.log("An error occurred");
  console.log(e);
}
