const { User } = require('../models/index.js')
const { createToken } = require('../helpers/jwt.js')
// const errHandler = require('../helpers/errHandler.js')
const { matchPassword } = require('../helpers/bcrypt.js')

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
}

module.exports = Controller;