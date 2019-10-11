const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const app = express();
const exphbs = require("express-handlebars");
const members = require("./Members");

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

//init middleware
app.use(logger);

//Handle bars Middlewarre
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members: members
  })
);

//set a static folder`
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
