const http = require("http");

const routes = require("./routes");

// function reqListener(req, res) {
// }
// http.createServer(reqListener)

// http.createServer(function(req, res) {

// })

// console.log(routes.someText);


// const server = http.createServer(routes.handler);
const server = http.createServer(routes);
//   console.log(req.url, req.method, req.headers);

server.listen(3000);
