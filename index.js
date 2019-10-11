const express = require("express");
const path = require("path");
const members = require("./Members");

const app = express();

//set a static folder
app.use(express.static(path.join(__dirname, "public")));

//Gets all members
app.get("/api/members", (req, res) => res.json(members));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
