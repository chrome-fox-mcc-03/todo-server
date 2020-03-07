if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandling");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);

app.use(errorHandler);
app.listen(process.env.PORT, () =>
  console.log(`${process.env.PORT}のポートを聞いた。`)
);
