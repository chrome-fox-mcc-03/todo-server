if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// console.log(process.env)
// require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./routes/index.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routers)

app.listen(process.env.PORT, () => console.log(`Port ${process.env.PORT} is good to go!`))
