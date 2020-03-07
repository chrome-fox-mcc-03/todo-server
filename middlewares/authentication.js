const { checkToken } = require('../helper/jwt');
const { User } = require('../models/index');

// function 

module.exports = function (req, res, next) {
    try {
        if(req.headers.token) {
            req.decoded = checkToken(req.headers.token);
            User.findOne({
                where: {
                    email : req.decoded.email
                }
            })
            .then(result => {
                if(result) {
                    next()
                } else {
                    next({ status: 401,
                        message: `authentication failed` 
                    })
                }
            })
            .catch (error => {
                next(error)
            })
            
        }
    } catch (err) {
        // res.status(500).json(err)
        next({
            status: 401,
            message: `authentication failed`
        })
    }
} 