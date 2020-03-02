if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const PORT = process.env.PORT
const index = require('./routes/index')

app.use(express.urlencoded({extended:false}))

app.use(index);

app.listen(PORT, ()=> console.log('listenig on', PORT));