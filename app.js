if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routes/index');

const errorHandler = require('./helper/myErrorHandler')

app.set("view engine", "ejs");
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server jalan : " + PORT);
});