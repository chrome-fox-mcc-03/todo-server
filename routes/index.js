const router = require('express').Router()
const todoRoute = require('./todo')


router.get('/', (req, res) => res.status(201).json({
    test: 'TEST'
}))
router.use('/todos', todoRoute)

module.exports = router