const router = require('express').Router();
const Controller = require('../controllers/UserController');

router.post('/', Controller.register);

module.exports = router;