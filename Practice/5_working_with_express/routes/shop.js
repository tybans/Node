const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path')


router.get("/", (req, res, next) => {
  //   console.log("In another middleware");
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;

