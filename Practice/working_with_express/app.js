const express = require('express')

const app = express()

// Middleware
// The function which we pass to app.use() will be executed for every incoming request and this function will receive three arguments.
// next is actually a function. A function that will be passed to this function by express.js
// This next argument as a function has to be executed to allow the request to travel on to the next middleware
// We have to call next() at the top middleware to allow the request to travel on to the next middleware in line. Basically it goes from top to bottom
app.use((req, res, next) => {
    console.log('In the middleware');
    next()  // Allows the rquest to continue to the next middleware in Line
    
} )
app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1')   //Send allows us to send a response, allows us to attach a body which is of type any
    
} )


app.listen(5000)