const { getPayload } = require('../helper/jwt')
const { User } = require('../models/index');
const AppError = require('../helper/myCustomError');

function authenticate (req, res, next) {
    if (!req.headers.token) {
        next(AppError(400, "Please login as valid user"));
    } else {
        let payload = getPayload(req.headers.token);
        // res.status(200).json(payload);
        User.findOne({
            where: {
                id: payload.id,
                email: payload.email
            }
        })
        .then(result => {
            if (result) {
                req.thisUser = payload;
                next();
            } else {
                next(AppError(400, "Please login as valid user"));
            }
        })
        .catch(next)
    }
}

module.exports = authenticate;