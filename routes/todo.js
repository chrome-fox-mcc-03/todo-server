const router = require('express').Router();
const Controller = require('../controllers/todo');
const authentication = require('../middlewares/authentication');
const authorization  = require('../middlewares/authorization');

router.use(authentication)

router.post('/', Controller.create)

router.get('/', Controller.findAll)

router.get('/:id', Controller.findOne)

router.put('/:id', authorization, Controller.update)

router.delete('/:id', authorization, Controller.destroy)

module.exports = router