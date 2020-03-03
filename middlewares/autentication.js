const { verifyToken } = require('../helpers/jwt.js')
module.exports = function(req, res, next) {
    try {
        token = req.headers.token
        req.decode = verifyToken(token)
        next()
    } catch (err) {
        next(err)
    }
}