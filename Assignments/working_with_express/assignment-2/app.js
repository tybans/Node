const express = require('express')
const path = require('path')
const mainRoute = require('./routes/index')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoute)

app.listen(4000)