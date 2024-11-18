const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path')

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  //   console.log("In another middleware");
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// /admin/add-product
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

