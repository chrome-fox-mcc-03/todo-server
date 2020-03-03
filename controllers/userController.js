"use strict"

const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwt')

class Controller {
    static register(req, res, next){
        const { first_name, username, email, password } = req.body
        const last_name = req.body.last_name || ''
        User.create({
            first_name,
            last_name,
            email,
            username,
            password
        })
        .then(newUser => {
            const dataToShow = {
                name: newUser.name,
                username: newUser.username,
                id: newUser.id
            }
            res.status(201).json(dataToShow)
        })
        .catch(next)
    }

    static login(req, res, next){
        const { emailOrUsername, password } = req.body
        const key = (/@/.test(emailOrUsername)) ? 'email' : 'username'
        const loginError = {
            name: 'LoginError',
            message: 'Username/Email/Password false'
        }
        User.findAll({
            where:{
                [key]: emailOrUsername,
            }
        })
        .then(result => {
            if(result[0]) {
                return comparePassword(password, result[0])
            }
            else {
                throw (loginError) //Username/email not found
            }
        })
        .then(result => {
            if(result.compareResult){
                const userToken = generateToken({
                    username: result.userData.username,
                    id: result.userData.id,
                    password: result.userData.password
                })
                res.status(200).send(userToken) //<- Token generated, test on postman
            }
            else{
                throw (loginError) //Wrong password
            }
        })
        .catch(next)
    }

    
}

module.exports = Controller