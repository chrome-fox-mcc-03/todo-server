if (process.env.NODE_ENV == "development") {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const route = require('./routes/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(route);

app.listen(process.env.PORT, () => {console.log(`dev run in port ${process.env.PORT}`)});