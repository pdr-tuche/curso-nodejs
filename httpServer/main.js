var http = require("http");

let port = 3000;
http
  .createServer(function callback(req, res) {
    res.end("Olá");
  })
  .listen(port);
console.log(`server is running at ${port}`);
