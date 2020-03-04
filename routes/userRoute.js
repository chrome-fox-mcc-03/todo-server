const userRoute = require("express").Router()
const UserController = require("../controllers/UserController.js")

userRoute.post("/signup", UserController.signup)
userRoute.post("/signin", UserController.signin)
userRoute.post("/googleSignin", UserController.googleSignin)
http://localhost/4000/googleSignin

module.exports = userRoute