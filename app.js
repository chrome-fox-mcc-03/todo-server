if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require ('express')
const app = express()
const port = process.env.PORT
const routers = require('./routes/index')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routers)

app.listen(port,() => {
    console.log('Server Ok! ' + port)
})