const { getPayload } = require('../helper/jwt')
const { User } = require('../models/index');
const AppError = require('../helper/myCustomError');

function authenticate (req, res, next) {
    let payload = getPayload(req.headers.token);
    if (!req.headers.token) {
        throw AppError(400, "Please login as valid user");
    } else if (req.headers.token && payload === null) {
        throw AppError(400, "Please login as valid user");
    } else {
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