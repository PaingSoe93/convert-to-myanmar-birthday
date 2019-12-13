const express = require("express");
const getMyanmarDate = require("english-myanmar-date-converter");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  let date = req.query.date;
  let data = getMyanmarDate(date, 0);
  html = "";
  html += "<body>";
  html += "<h1 style='text-align: center'>" + data + "</h1>";
  html += "<form action='/' name='form1'>";
  html +=
    "<label>date</label><input type='date' name='date' style='width:100%'>";
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: PORT:${PORT}/`);
});
