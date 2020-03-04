const jwt = require('../helpers/jwt');
const ErrorModel = require('../helpers/error');
const { User } = require('../models');

const authenticator = (req, res, next) => {
    try {
        const token = req.headers.token; // headers.token menentukan nama key di postman
        req.decoded = jwt.verifyToken(token);
        User.findByPk(req.decoded.id)
        .then((result) => {
            if(result){
                next();
            } else {
                throw new ErrorModel(400, "please login first!");
            }
        }).catch(next);
    } catch (error) {
        next(error);
    }
}

module.exports = authenticator;
