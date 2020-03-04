const jwt = require('jsonwebtoken');
const { User } = require('../models');

function authentication(req, res, next) {
    try {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    if(token){
        User.findOne({
            where: {
                email: decoded.email
            }
        })
            .then(result => {
                if(result){
                    req.userId = result.id
                    next()
                } else {
                    next({
                        name: "not found",
                        status: 404,
                        message: "data not found"
                    })
                }
            })
            .catch(err => {
                next({
                    name: "not found",
                    status: 404,
                    message: "data not found"
                })
            })
        } 

    } catch(err) {
        next({
            name: "bad request",
            status: 400,
            message: "invalid request"
        })
    }
     
}

module.exports = authentication