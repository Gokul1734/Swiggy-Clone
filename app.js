const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  app.use(express.static("public"));
});

app.get("/handleClick", (req, res) => {
  console.log("Button clicked!");
  res.send("Button clicked!");
});

app.listen(3000, function () {
  console.log("Server is running on localhost:3000");
});
