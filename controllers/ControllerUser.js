const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library')

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

    static loginGoogle(req, res, next) {
        let { id_token } = req.body
        let email = null
        let password = 'default'

        const Client = new OAuth2Client(process.env.CLIENT_ID);

        Client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                const payload = ticket.getPayload();
                email = payload.email
                return User.findOne({
                    where:{
                        email
                    }
                })
            })
            .then(user => {
                if(user) {
                    return user
                } else {
                    return User.create({
                        email,
                        password
                    })
                }
            })
            .then(user => {
                const access_token = getToken({ id: user.dataValues.id, email: user.dataValues.email })
                res.status(201).json({ id: user.dataValues.id, email: user.dataValues.email, access_token })
            })
            .catch((err) => {
                next(err)
            });
    }
}


module.exports = ControllerUser