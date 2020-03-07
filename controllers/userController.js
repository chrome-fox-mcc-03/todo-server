const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt.js')
const { OAuth2Client } = require('google-auth-library');
                                                                                                                                                                                                        
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
                let token = getToken(payload)
                res.status(201).json(token)
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
                        let token = getToken(payload)
                        res.status(200).json(token)
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
    static googleLogin(req, res, next) {
        let id_token = req.body.id_token
        const client = new OAuth2Client(process.env.CLIENT_ID_LOGIN);
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID_LOGIN
        })
            .then(response => {
                const emailGoogle = response.payload.email
                User.findOne({
                    where: {
                        email:emailGoogle
                    }
                })
                .then(user => {
                    if(user) {                        
                        return user
                    }
                    else {
                        return User.create({
                            email: emailGoogle,
                            password: 'password'
                        })
                    }
                })
                .then(response => {
                    let payload = {
                        id: response.id,
                        email: response.email
                    }
                    let token = getToken(payload)
                    res.status(201).json(token)
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController