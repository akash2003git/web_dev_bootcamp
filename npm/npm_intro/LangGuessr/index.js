const franc = require("franc");
const colors = require("colors");
const langs = require("langs");
const input = process.argv[2];
const code = franc(input);
const obj = langs.where("3", `${code}`);
if (obj) {
  console.log("Our best guess is: ".green, obj.name.green);
} else {
  console.log("An error occurred!".red);
}
