const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')

router.get('/movies',MovieController.getMovies)

module.exports = router