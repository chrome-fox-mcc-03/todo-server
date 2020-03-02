const router = require('express').Router()
const controller = require('../controllers/todoController')

router.get('/', controller.get)

router.post('/', controller.add)

router.get('/:id', controller.getId)

router.put('/:id',controller.put)

router.delete('/:id',controller.delete)

module.exports = router