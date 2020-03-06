const router = require('express').Router()
const controller = require('../controllers/todoController')
const todoRouter = require('./todoRouter')
const userRouter = require('./userRouter')
const errorHandler = require('../helper/errorHandler')

router.get('/', (req, res) => {
    res.send('home from router')
})

router.use('/users', userRouter)
router.use('/todos', todoRouter)

router.use(errorHandler)



module.exports = router