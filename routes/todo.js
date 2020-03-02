const router = require('express').Router()
const { create, findAll, update, destroy } = require('../controllers/todo')

router.post('/', create)
router.get('/', findAll)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router