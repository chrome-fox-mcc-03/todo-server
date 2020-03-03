const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

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
                if (result.id) {
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
}

module.exports = UserController