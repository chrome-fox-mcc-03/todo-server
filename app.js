require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Routes/index.js');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(router)

app.listen(process.env.PORT, ()=> {console.log(`You're listening to ${process.env.PORT}`)});