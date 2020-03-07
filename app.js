require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandler')
const router = require('./routes/index')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


app.use(router)
app.use(errorHandler)

console.log(new Date().toDateString())

app.listen(port, () => {
    console.log('Connected ' + port)
})