const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/src', express.static(path.join(__dirname, 'src')))

app.get("/api", (req, res) => {
  res.json({ message: "Hello from test server!" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});