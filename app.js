if(process.env.NODE_ENV == "development") {
    require('dotenv').config()

}
const express = require('express')
const app = express()
const router = require('./routes/index')
const errhandler = require('./middleware/errhandler')
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(router)


app.use(errhandler)
app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})