if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`))