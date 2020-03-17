if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require ('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const routers = require('./routes/index')
const {errorHandler} = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routers)
app.use(errorHandler)

app.listen(port,() => {
    console.log('Server Ok! ' + port)
})