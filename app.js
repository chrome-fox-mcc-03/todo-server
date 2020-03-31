if (process.env.NODE_ENV == "development") {
	require('dotenv').config();
}

const cors = require('cors')
const express = require('express');
const app = express();
const router = require('./Routes/index.js');
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded( { extended: false } ))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(process.env.PORT, ()=> {console.log(`You're listening to ${process.env.PORT}`)});