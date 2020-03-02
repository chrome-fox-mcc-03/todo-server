const router = require("express").Router()
const Controller = require('../controllers/ControllerTodo')

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.get('/:id', Controller.findByPk)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.deleteTodo)

module.exports = router