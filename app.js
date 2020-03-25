if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const routers = require("./routes");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");
var morgan = require("morgan");
morgan("tiny");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routers);
app.use(errorHandler);
app.listen(process.env.PORT, () =>
  console.log(`I love you ${process.env.PORT}.`)
);
