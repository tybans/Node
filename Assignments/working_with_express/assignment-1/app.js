const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

app.use("/sec-page", (re, res, next) => {
  console.log("The second page");
  res.send("<h2>The second page</h2>");
});

app.use("/", (re, res, next) => {
  console.log("The first page");
  res.send("<h1>The first page</h1>");
});

app.listen(4000);
