const router = require("express").Router()
const Controller = require('../controllers/ControllerTodo')
const auth = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(auth)
router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.get('/:id', Controller.findByPk)
router.put('/:id', authorization, Controller.update)
router.delete('/:id', authorization, Controller.deleteTodo)

module.exports = router