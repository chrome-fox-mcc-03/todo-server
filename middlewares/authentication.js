const { verifyToken } = require('../helpers/jwt');

module.exports = function(req, res, next) {
    try {
        req.decoded = verifyToken(req.headers.token);
        next()
    } catch {
        next({
            status: 401,
            message: { error: 'Login required' }
        })
    }
}