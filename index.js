// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from GitHub Actions!");
});

app.listen(PORT, () => {
  console.log(`Server 10.16 ${PORT}`);
});
