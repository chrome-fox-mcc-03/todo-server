if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const cors = require('cors')
const { show } = require('./helpers/google')
const errorHandler = require('./middlewares/errorHandler.js')
const express = require('express')
const router = require('./routes')
const app = express()
show()
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`))