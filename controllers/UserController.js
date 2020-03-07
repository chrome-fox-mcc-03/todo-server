const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
    static register(req, res, next) {
        let input = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(input)
            .then(result => {
                const payload = {
                    id: result.id,
                    email: result.email
                }

                let token = generateToken(payload)

                res.status(201).json(token)
            })

            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    const pw = decryptPassword(password, result.password)
                    if (pw) {
                        const payload = {
                            id: result.id,
                            email: result.email
                        }
                        const token = generateToken(payload)
                        res.status(200).json(token)
                    }
                    else {
                        next({
                            status: 400,
                            message: 'email/password wrong'
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: 'email/password wrong'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        const { id_token } = req.body
        client
            .verifyIdToken({
                idToken: id_token,
                audience: process.env.CLIENT_ID
            })
            .then(result => {
                const { email } = result.payload
                User.findOne({ where: { email } })
                    .then(user => {
                        if (user) {
                            const isGoogleAuth = decryptPassword(
                                process.env.GOOGLE_PASSWORD,
                                user.password
                            )
                            if (isGoogleAuth) {
                                const payload = {
                                    id: user.id,
                                    email: user.email
                                }
                                const message = 'Successfully logged in.'
                                const token = generateToken(payload)
                                res.status(200).json({ token, message })
                            } else {
                                res.status(400).json({
                                    message: 'Email sudah terdaftar'
                                })
                            }
                        } else {
                            const newUser = {
                                email,
                                password: process.env.GOOGLE_PASSWORD
                            }

                            User.create(newUser)
                                .then(result => {
                                    const payload = {
                                        id: result.id,
                                        email: result.email
                                    }
                                    const message = 'Successfully logged in.'
                                    const token = generateToken(payload)
                                    res.status(200).json({ token, message })
                                })
                                .catch(next)
                        }
                    })
                    .catch(next)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController