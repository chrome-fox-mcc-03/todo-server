const { User } = require('../models/index');
const { compare } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
    static signUp(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(result => {
                if (result == null) {
                    User.create({
                        email: req.body.email,
                        password: req.body.password
                    })
                        .then(createdUser => {
                            let { id, email } = createdUser
                            res.status(201).json({ id, email })
                        })
                        .catch(err => {
                            next(err)
                        })
                } else {
                    next({
                        status: 400,
                        message: { error: 'Your email has already registered' } 
                    })
                }
            })
            .catch(err => {
                next(err)
            })

    }

    static signIn(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(userFound => {
                if (userFound) {
                    const pw = compare(req.body.password, userFound.password);
                    if (pw) {
                        const payload = { id: userFound.id, email: userFound.email }
                        let token = generateToken(payload)
                        res.status(200).json(token)
                    } else {
                        next({
                            status: 400,
                            message: { error: 'Username/password invalid' }
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: { error: 'Username/password invalid' }
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;