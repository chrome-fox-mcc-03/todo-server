const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
    static register (req, res, next){
        const { name, email, password } = req.body
        const newUser = { name, email, password }
        User
            .create(newUser)
            .then(user => {
                res.status(201).json({
                    id: user.id,
                    name: user.name,
                    email: user.email
                })
            })
            .catch(next)
    }
    static login ( req, res, next) {
        const { email, password } = req.body
        User
            .findOne({
                where: {
                    email : email
                }
            })
            .then(user => {
                if(user){
                    if(comparePassword(password, user.password) === true) {
                        let payload = {
                            id: user.id,
                            email: user.email
                        }
                        let access_token = generateToken(payload)
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        console.log('SALAH PASSWORD BENER=============')
                        next({
                            status: 400,
                            message: "email/password wrong!" 
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: "email/password wrong!" 
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController