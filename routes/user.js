const userRoute = require('express').Router()
const usercontroller = require('../controller/usercontroller')

// userRoute.post('/register', usercontroller.Register)
userRoute.post('/register', function(req, res, next) {
    usercontroller.Register(req, res, next)
})

userRoute.post('/login', function(req, res,next) {
    console.log(req.body)
    usercontroller.Login(req, res, next)    
})

userRoute.post('/googlelogin', function(req, res, next) {
    usercontroller.googleLogin(req, res, next)
})

module.exports = userRoute