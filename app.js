const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const results = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${results.getDate()}/${results.getMonth() + 1}/${results.getFullYear()}`
  );
});

module.exports = app;
