if(process.env.NODE_ENV === 'development' ){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(routes)
app.use(errorHandler)



app.listen(process.env.PORT, () => {
    console.log(`app listen to : ${process.env.PORT}`);
    
})