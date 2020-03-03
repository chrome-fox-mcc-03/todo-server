const jwt = require('../helpers/jwt');

const authenticator = (req, res, next) => {
    try {
        const token = req.headers.token; // headers.token menentukan nama key di postman
        req.decoded = jwt.verifyToken(token);
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authenticator;
