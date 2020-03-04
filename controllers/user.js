const { User } = require('../models')
const checkPass = require('../helper/hashPassword');
const Jwt = require('../helper/jwt');

class UserController {
    static register(req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(result => {
                const dataUser = {
                    id: result.id,
                    email: result.email
                }
                res.status(201).json({
                    User: dataUser
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                password = checkPass.comparePassword(password, result.password)
                if(password) {
                let token = Jwt.generateToken({
                    id: result.id,
                    email: result.email
                })
                    res.status(200).json({
                        token
                    })
                } else {
                    next({
                        name: "unauthorized",
                        status: 401,
                        message: "email or password is wrong"
                    })
                }
            })

            .catch(err => {
                next(err)
            })
    }


}

module.exports = UserController