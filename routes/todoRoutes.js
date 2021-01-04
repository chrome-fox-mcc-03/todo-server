"use strict"

const router = require('express').Router()
const todoController = require('../controllers/todoController')
const { authoFindAll, checkOwnerId } = require('../middlewares/authorization')

router.post('/', todoController.create)
router.get('/', authoFindAll, todoController.findAll)
router.get('/:id', checkOwnerId, todoController.findId)
router.put('/:id', checkOwnerId, todoController.update)
router.delete('/:id', checkOwnerId, todoController.delete)

module.exports = router