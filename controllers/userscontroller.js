const { User } = require('../models/index.js')
const { createToken } = require('../helpers/jwt.js')
// const errHandler = require('../helpers/errHandler.js')
const { matchPassword } = require('../helpers/bcrypt.js')
const { OAuth2Client } = require('google-auth-library')
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET)

class Controller {
    static register(req, res, next) {
        // console.log(req.body)
        // res.status(200).json(req.body)
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
            .then(user => {
                let token = createToken(user)
                let arr = [user, token]
                return res.status(201).json(arr)
            })
            .catch(err => next(err))
    }
    static login(req, res, next) {
        let logging  = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({where: {email: logging.email}})
            .then(user => {
                if(!user) {
                    throw { status: 400, customName: 'Email/pass does not match'}
                } else if(matchPassword(logging.password, user.password) == false) {
                    throw { status: 400, customName: 'Email/pass does not match'}
                } else {
                    let token = createToken(user) 
                    return res.status(200).json({user: user.email, token: token})
                }
            })
            .catch(err => next(err))
    }
    static googleSignIn(req, res, next) {
        let googleToken = req.headers.token
        let newUser = {}
        googleClient.verifyIdToken({
            idToken: googleToken,
            audience: process.env.GOOGLE_CLIENT_ID
        }).then(ticket => {
            let payload = ticket.getPayload()
            let userId = payload['sub']
            let userEmail = payload.email
            newUser.email = payload.email
            newUser.password = process.env.GOOGLE_DEFAULT_PASS
            // console.log({payload: payload})
            return User.findOne({where: {email: userEmail}})
        })
        .then(user => {
            if(user) {
                let token = createToken(user)
                console.log('user existed')
                return res.status(200).json({user: user.email, googleSignIn: true, token: token})
            }
            else {
                console.log(user)
                console.log('No such user')
                console.log(newUser)
                return User.create(newUser)
            }
        })
        .then(user => {
            let token = createToken(user)
            console.log('User created through Google')
            return res.status(201).json({user: user.email, googleSignIn: true, token: token})
        })
        .catch(err => next(err))
    }
}

module.exports = Controller;