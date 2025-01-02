const express = require("express");
const app = express();
const path = require("path"); // a built-in express module
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public")));
// Serves static files (like CSS, JS, images) from the public directory.
// path.join(__dirname, "/public") resolves the path to the public folder relative
// to the current file (index.js).

app.set("view engine", "ejs");
// Sets EJS as the templating engine for rendering dynamic HTML.
app.set("views", path.join(__dirname, "/views"));
// Configures the directory for view templates (EJS files).
// by default the views directory is process.cwd()/views
// here we give a static path to views directory using path module
// __dirname = location of index.js
// path.join(__dirname, "/views") sets the views directory to a
// views folder in the same directory as index.js.

// Use __dirname for module-relative paths (e.g., serving static files
// or loading resources in the module directory).
// Use process.cwd() when working with paths relative
// to where the Node.js process was started.

// Route 1: Root ("/")
app.get("/", (req, res) => {
  res.render("home");
});
// Handles GET requests to /.
// Renders the home.ejs template located in the views directory.

app.get("/cats", (req, res) => {
  const cats = ["Monty", "Stephanie", "Rocket", "Winston", "Shiro"];
  res.render("cats", { cats });
});
// Handles GET requests to /cats.
// Creates an array of cat names.
// Passes the cats array to the cats.ejs template.
// res.render("cats", { cats }): Renders the cats.ejs file and injects cats
// as a variable accessible in the template.

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  // console.log(data);
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
// Starts the server on port 3000.
// The callback function logs Listening on port 3000 to
// confirm the server is running.
