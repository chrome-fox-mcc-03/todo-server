const express = require('express')
const router = express.Router()
const todo_routes = require('./todo_routes')
const user_routes = require('../routes/user_routes')
const movie_routes = require('./movie_routes')

router.use('/todos',todo_routes)
router.use('/users',user_routes)
router.get('/movies', movie_routes)

module.exports = router