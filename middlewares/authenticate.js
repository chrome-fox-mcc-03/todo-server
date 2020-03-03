const { getPayload } = require('../helper/jwt')
const AppError = require('../helper/myCustomError');
function authenticate (req, res, next) {
    let payload = getPayload(req.headers.token);
    if (payload.name === 'JsonWebTokenError') {
        next(AppError(400, "Please login as valid user"));
    } else {
        // res.status(200).json(payload);
        req.thisUser = payload;
        next();
    }
}

module.exports = authenticate;