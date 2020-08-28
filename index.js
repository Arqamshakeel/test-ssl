var express = require("express");
var app = express();
app.listen(8080, () => {
  console.log("Listeing on port 8080");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
