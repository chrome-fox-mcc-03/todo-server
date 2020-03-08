if (process.env.NODE_ENV === 'development') require('dotenv').config()
 
const express = require('express')
const cors = require('cors')
const PORT = +process.env.PORT || 3000

const errHandler = require('./middlewares/errHandler')
const app = express()
const routes = require('./routes')

//middlewares
app.use(express.urlencoded( { extended: false }))
app.use(express.json())
app.use(cors())

app.use(routes)
app.use(errHandler)

app.listen(PORT, () => console.log('I LOVE YOU', PORT))