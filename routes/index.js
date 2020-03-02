"use strict"

const router = require('express').Router()
const todoRouter = require('./todoRoutes')

router.use('/todos', todoRouter)

module.exports = router