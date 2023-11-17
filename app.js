const express = require("express");
require("./config/mysql.config");
const routes = require("./routes/devs.routes");
const path = require("path");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

//eslint-disable-next-line
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api", routes);

module.exports = app;
