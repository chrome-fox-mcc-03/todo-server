if (process.env.NODE_ENV == "development") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./routes');
const errorHandling = require('./middlewares/errorHandling');
const cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandling);

app.listen(PORT, console.log("app js is running in", PORT));