const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')

class ControllerUser {
    static register(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email: email
            }
        })
            .then(user => {
                if (user) {
                    throw {
                        status: 400,
                        message: {
                            error: 'Email has been registered, try another email'
                        }
                    }
                } else {
                    return User.create({
                        email,
                        password
                    })
                }
            })
            .then(user => {
                const { id, email } = user
                const access_token = getToken({ id, email })
                res.status(201).json({ id, email, access_token })
            })
            .catch(err => next(err))
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email: email
            }
        })
            .then(user => {
                if (user) {
                    const check = comparePassword(password, user.password)
                    if (check) {
                        let payload = {
                            id: user.id,
                            email: user.email
                        }
                        payload.access_token = getToken(payload)
                        res.status(200).json(payload)
                    } else {
                        next({
                            status: 400,
                            message: {
                                error: 'Email / Password wrong'
                            }
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: {
                            error: 'Email / Password wrong'
                        }
                    })
                }
            })
            .catch(err => next(err))
    }
}


module.exports = ControllerUser