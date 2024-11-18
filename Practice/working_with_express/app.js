const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require('./utils/path')


const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

// body parsing
app.use(bodyParser.urlencoded({ extended: false }));

// To access static files
app.use(express.static(path.join(__dirname, 'public')))


// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

// handling routes

// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.get("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

app.use('/admin', adminRoute);

app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404-page.html'))
})


app.listen(5000);
