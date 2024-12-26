const express = require("express");
const app = express();
// console.dir(app);

// Express creates the request and response objects automatically for us
// by parsing the incoming http information and the it passes it in as the
// first argument to our callback
// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   // res.send method is versatile. You can also send different types of
//   // data like json
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Simple HTML Page</title>
//     </head>
//     <body>
//         <h1>Welcome to My Webpage</h1>
//         <p>This is a simple HTML page with a heading and a paragraph. HTML is easy to learn and fun to use!</p>
//     </body>
//     </html>
//
//     `);
//   // We can't have an http request with more than one response
// });

// request is an object created by express based upon the incoming http request
// response is an object made by express upon the request
// both are passed into this callback
// response has a bunch of methods on it including res.send()

// we are routing some incoming request to an outgoing response
app.get("/", (req, res) => {
  console.log("ROOT ROUTE");
  res.send("THIS IS THE HOME PAGE!!!");
});

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`<h1>Welcome to r/${subreddit}</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID:${postId} on r/${subreddit}</h1>`);
});

app.get("/cats", (req, res) => {
  console.log("CAT REQUEST!");
  res.send("MEOW");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats");
});

app.get("/dogs", (req, res) => {
  console.log("DOG REQUEST!");
  res.send("WOOF");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

// /(.*)/ is a regular expression that matches any path
// .* means "zero or more of any character."
app.get(/(.*)/, (req, res) => {
  res.send("I don't know that path :(");
});

app.listen(8000, () => {
  console.log("LISTENING ON PORT 8000!");
});
