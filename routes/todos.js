const router = require('express').Router();
const Controller = require('../controller/todos')

router.post('/', Controller.create)
router.get('/', Controller.findAll)
router.get('/:id', Controller.findOne)
router.put('/:id', )
router.delete('/:id', )

module.exports = router