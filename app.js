require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const router = require('./routes')


app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(port, () => {
    console.log('This app is running on port:', port)
})