"use strict"

const router = require('express').Router()
const todoRouter = require('./todoRoutes')
const userRouter = require('./userRoutes')
const authenMiddleware = require('../middlewares/authentication')

router.use('/users', userRouter)
router.use(authenMiddleware)
router.use('/todos', todoRouter)

module.exports = router