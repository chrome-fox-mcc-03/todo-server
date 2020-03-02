if (process.env.NODE_ENV === "development") require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const index = require('./routes/index')

app.use(express.urlencoded({ extended: false }))
app.use('/', index)

app.listen(port, () => {console.log(`Es jeruk dimalang harga ${port}`)})
