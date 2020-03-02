const Controller = require('../controllers/controller.js')
const router = require('express').Router();

router.post('/todos', Controller.create)
router.get('/todos', Controller.read)
router.get('/todos/:id', Controller.readId)
router.put('/todos/:id', Controller.update)
router.delete('/todos/:id', Controller.delete)

module.exports = router;