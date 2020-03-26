if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()    
}
const express = require('express')
const app = express()
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(process.env.PORT, function() {
    console.log(`i love you ${process.env.PORT}`);
})