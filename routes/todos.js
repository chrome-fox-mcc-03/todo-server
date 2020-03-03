const router = require('express').Router();
const Controller = require('../controller/todos')
const Auth = require('../middleware/auth')
const Authorization = require('../middleware/authorization')

router.use(Auth)
router.post('/', Controller.create)
router.use(Authorization)
router.get('/', Controller.findAll)
router.get('/:id', Controller.findOne)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.destroy)

module.exports = router