if (process.env.NODE_ENV === "development") require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT
const index = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', index)

app.use(errorHandler)



app.listen(port, () => {console.log(`Es jeruk dimalang harga ${port}`)})
