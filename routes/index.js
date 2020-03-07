const router = require('express').Router()
const controller = require('../controller/controller')
const todoRoute = require('./todos')
const userRoute = require('./user')


router.use('/todos', todoRoute)
router.use("/user", userRoute)
module.exports = router