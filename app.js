if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const routers = require("./routers");
app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routers);

app.listen(process.env.PORT, (req, res) =>
  console.log(`I love you ${process.env.PORT}.`)
);
