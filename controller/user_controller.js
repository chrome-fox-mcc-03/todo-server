const { User } = require('../models/index.js');
const { checkPassword } = require('../helper/bycrypt.js');
const { generateToken } = require('../helper/jwt.js')


class UserController {
    static signUp(req, res, next) {
        let { email, password } = req.body;
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result.length == 0) {
                    User.create({
                        email,
                        password
                    })
                        .then(result => {
                            let data = {
                                id: result.id,
                                email: result.email
                            }
                            res.status(200).json(data);
                        })
                        .catch(error => {
                            next({ error })
                        })
                } else {
                    next({
                        status: 400,
                        message: `someone has signed up using this email`
                    })
                }
            })
            .catch(error => {
                next({ error })
            })

    }

    static signIn(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(result => {
                if (result) {
                    let unhashedPassword = checkPassword(req.body.password, result.password)
                    if (unhashedPassword) {
                        let data = {
                            email: result.email,
                            id: result.id
                        }
                        let token = generateToken(data)
                        res.status(200).json({token});
                    } else {
                        next({
                            status: 400,
                            message: `email/password salah`
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: `email/password salah`
                    })
                }

            })
            .catch(error => {
                next({ error })
            })
    }
}

module.exports = UserController