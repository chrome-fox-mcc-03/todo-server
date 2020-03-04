if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routes/index');

const errorHandler = require('./middlewares/errorHandler')

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server jalan : " + PORT);
});