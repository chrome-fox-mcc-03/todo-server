const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/todos', Controller.findAll)
router.post('/todos', Controller.create)
router.get('/todos/:id', Controller.findOne)
router.put('/todos/:id', Controller.update)
router.delete('/todos/:id', Controller.destroy)


module.exports = router