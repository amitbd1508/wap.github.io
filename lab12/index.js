const express = require("express");
const app = express();
const path = require("path");
const mustacheExpress = require("mustache-express");
const usersRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");
const homeRoute = require("./routes/homeRoute");

app.engine("html", mustacheExpress());

app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/products", productsRoute);
app.use("/users", usersRoute);

app.use("/error", (req, res, next) => {
  throw new Error("Exception caught");
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, "views", "500.html"));
});

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("App running on 3000");
});
