if(process.env.NODE_ENV === "development") {
    console.log("hello");
    require("dotenv").config()
}
 // const PORT = process.env.PORT || 4000
const express = require("express")
const app = express()
const router = require("./routes/index.js")
const errorHandler = require("./middlewares/errorHandling.js")
const cors = require("cors")
const PORT = process.env.PORT || 4000

// app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})