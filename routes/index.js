const express = require('express')
const router = express.Router()
const TodoRoutes = require('./todos')

router.post('/register')
router.post('login')
router.get('/todos', TodoRoutes )
module.exports = router