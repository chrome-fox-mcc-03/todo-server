const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models/index')

function auth(req, res, next) {
    try {
        const token = req.headers.token
        req.decoded = verifyToken(token)
        console.log(req.decoded)
            User.findOne({
                where: {
                    email: req.decoded.email
                }
            })
                .then(user => {
                    if(user) next()
                    else next({
                        status: 401,
                        message: {
                            error: 'Please login first'
                        }
                    })
                })
                .catch(err => {
                    throw err
                })
    } catch(err) {
        next({
            status: 401,
            message: {
                error: 'Please login first'
            }
        })
    }      
}

module.exports = auth