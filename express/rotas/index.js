const express = require("express");
const app = express();
let port = 3000;

app.get("/", function callback(req, res) {
  res.send("Bien venido muchacho !!!");
});

app.get("/sobre", function callback(req, res) {
  res.send("esta é a rota da pagina sobre");
});

app.listen(port, function callback() {
  console.log(`servidor rodando na porta ${port}`);
});
