//run server :
// npx nodemon index.js
const express = require("express");
const app = express();
let port = 3000;

app.get("/", function callback(req, res) {
  res.sendFile(__dirname+"/templates/index.html");
});

app.listen(port, function callback() {
  console.log(`servidor rodando na porta ${port}`);
});
