const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api's
app.get("/api/users", (req, res) => {
  const file = path.join(__dirname, "data", "api.json");
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const users = JSON.parse(data.toString());
    res.status(200).json(users);
  });
});

// server
app.listen(PORT, () => console.log(PORT));
