if(process.env.NODE_ENV === "development") {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const router = require('./Routes/index')
const errorHandler = require('./middleware/errorhandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
console.log(`listen port ${PORT}`);
})