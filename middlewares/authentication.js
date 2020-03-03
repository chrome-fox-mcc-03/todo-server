const { verifyToken } = require('../helpers/jwt');

module.exports = function(req, res, next) {
    try {
        req.decoded = verifyToken(req.headers.token);
        next()
    } catch(err) {
        res.status(500).json(err)
    }
}