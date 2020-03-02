if (process.env.NODE_ENV == "development") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, console.log("app js is running in", PORT));