require('dotenv').config()
const express = require('express');
const app = express();

app.listen(process.env.port, ()=> console.log(`listening to port: ${process.env.port}`));