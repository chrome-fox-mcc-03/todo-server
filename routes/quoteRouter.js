const router = require('express').Router();
const QuoteController = require('../controllers/quoteController');

router.get('/', QuoteController.getQuote);

module.exports = router;