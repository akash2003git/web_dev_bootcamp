const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  console.log(req.cookies);
  const { name = "Anonymous" } = req.cookies;
  res.send(`Hey there ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "John Doe");
  res.cookie("animal", "Dog");
  res.cookie("color", "Golden");
  res.send("ok sent you a cookie!");
});

app.get("/getsignedcookies", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.cookie("vegetable", "onion", { signed: true });
  res.send("ok sent you a signed cookie");
});

app.get("/verifycookies", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});
