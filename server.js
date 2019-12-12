const express = require("express");
const getMyanmarDate = require("english-myanmar-date-converter");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send(getMyanmarDate("2017-05-28", 0));
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: PORT:${PORT}/`);
});
