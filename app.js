if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const PORT = process.env.PORT
const index = require('./routes/index')
const error = require('./middleware/errorhandler')
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(index);
app.use(error)

app.listen(PORT, ()=> console.log('listening on', PORT));