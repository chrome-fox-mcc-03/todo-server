const { checkToken } = require('../helper/jwt');

// function 

module.exports = function (req, res, next) {
    try {
        req.decoded = checkToken(req.headers.token);
        next()
    } catch (err) {
        res.status(500).json(err)
    }
} 