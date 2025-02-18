// // Creating Server

// const http = require("http");

// const routes = require("./routes");

// // function reqListener(req, res) {
// // }
// // http.createServer(reqListener)

// // http.createServer(function(req, res) {

// // })

// // console.log(routes.someText);


// // const server = http.createServer(routes.handler);
// const server = http.createServer(routes);
// //   console.log(req.url, req.method, req.headers);

// server.listen(3000);

// ============================================================================================

// Creating Server
// const http = require('http')

// Defining requestListener function
// function reqListener(req, res) {
  
// }

// http.createServer(reqListener)   // CreateServer takes a requestListener argument. A requestListener is simply a function that will execute for every incoming requests

// ===========================================================================================

// const http = require('http')

// // by using anonymous function
// http.createServer(function(req, res) {
  
// })


// =============================================================================================

// NextGen javascript syntax by using Arrow Function
const http = require('http')

// the createServer is actually returns a server, so we have to store that in a new variable or const
const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit()
})

// Listen actually starts a process where nodejs will not immediately exit our script but where nodejs will instead keep this running to listen.
// Listen takes a couple of optional arguments. 1- PORT - on which you want to listen, 2- Hostname- bydefault this will be the name of the Machine this is running on, so for our local machine, this is localhost by default
server.listen(5000)
