const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt.js')

class UserController {
    static signUp(req, res, next) {
        let { email, password } = req.body
        User.create({
            email,
            password
        })
            .then(response => {
                let payload = {
                    id: response.id,
                    email: response.email
                }
                res.status(201).json(payload)
            })
            .catch(next)
    }
    
    static signIn(req, res, next) {
        let { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
            .then(response => {
                if(response) {
                    if(comparePassword(password, response.password)) {
                        let payload = {
                            id: response.id,
                            email: response.email
                        }
                        res.status(200).json(getToken(payload))
                    } else {
                        next({
                            status: 401,
                            message: 'Email and Password incorrect'
                        })
                    }
                } else {
                    next({
                        status: 401,
                        message: 'Email and Password incorrect'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController