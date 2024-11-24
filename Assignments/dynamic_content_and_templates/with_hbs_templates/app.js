const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

const users = [];

// express-handlebars version 6.0 or higher does not support function
// app.engine("hbs", expressHbs({ defaultLayout: "main-layout", extname: "hbs" }));
app.engine("hbs", expressHbs.engine({ defaultLayout: "main-layout", extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(4000, (req, res) => {
  console.log("server running");
});
