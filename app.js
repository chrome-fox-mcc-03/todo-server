if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const router = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middlewares/handleError')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)



app.listen(process.env.PORT, () => console.log('your app here', process.env.PORT))