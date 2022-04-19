const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
  });
app.get("/test", (req, res) => {
  res.send(`<h1>Hello Test!</h1>`);
});

app.listen(process.env.PORT || 3000);
