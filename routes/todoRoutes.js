"use strict"

const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.post('/', todoController.create)
router.get('/', todoController.findAll)
router.get('/:id', todoController.findId)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router