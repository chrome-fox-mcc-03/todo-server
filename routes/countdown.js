const router = require('express').Router();
const ControllerCountdown = require('../controllers/apiCountdown');

router.post("/create", ControllerCountdown.getCountdown)

module.exports = router