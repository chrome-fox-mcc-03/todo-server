const userRoute = require('express').Router()
const usercontroller = require('../controller/usercontroller')

// userRoute.post('/register', usercontroller.Register)
userRoute.post('/register', function(req, res, next) {
    usercontroller.Register(req, res, next)
})

userRoute.post('/login', function(req, res,next) {
    usercontroller.Login(req, res, next)
})


module.exports = userRoute