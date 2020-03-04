if (process.env.NODE_ENV == "development") {
	require('dotenv').config();
}

const cors = require('cors');
const express = require('express');
const app = express();
const route = require('./routes/index.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(route);

app.listen(process.env.PORT, () => {console.log(`dev run in port ${process.env.PORT}`)});