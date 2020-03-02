if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const router = require('./routes/index')

app.use(express.urlencoded({extended: false}))

app.use(router)


app.listen(process.env.PORT, () => console.log('your app here', process.env.PORT))