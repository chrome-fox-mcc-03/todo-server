const router = require('express').Router()
const controller = require('../controllers/todoController')
const todoRouter = require('./todoRouter')
router.get('/', (req, res) => {
    res.send('home from router')
})

router.use('/todos', todoRouter)

module.exports = router