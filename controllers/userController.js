"use strict"

const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwt')
const sendEmail = require('../helpers/thirdparties/restdb')
const {GoogleAuth, OAuth2Client} = require('google-auth-library');
const client = new GoogleAuth(process.env.CLIENT_ID);
const clientVerify = new OAuth2Client(process.env.CLIENT_ID);

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
        .then(newUser => sendEmail(newUser))
        .then(result => {            
            if(result.status == 201) {
                return {
                    name: result.config.user.name,
                    id: result.config.user.id,
                    email: result.config.user.email
                }
            }
            else{
                throw ({
                    name: 'EmailError'
                })
            }
        })
        .then(dataToShow => res.status(201).json(dataToShow))
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
                res.status(200).json({userToken, name: result.userData.first_name}) //<- Token generated, test on postman
            }
            else{
                throw (loginError) //Wrong password
            }
        })
        .catch(next)
    }

    static googleLogin(req, res, next){ 
        async function verify() {
            const ticket = await clientVerify.verifyIdToken({
                idToken: req.headers.token,
                audience: process.env.CLIENT_ID
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            const emailToSearch = payload.email
            if(payload.email_verified){
                User.findAll({
                    where: {
                        email: emailToSearch
                    }
                })
                .then(result => {
                    if(result[0]){
                        const userToken = generateToken({
                            username: result[0].username,
                            id: result[0].id,
                            password: result[0].password
                        })
                        res.status(200).json({
                            token: userToken,
                            name: result[0].first_name
                        })
                    }
                    else {
                        return User.create({
                            first_name: payload.given_name,
                            last_name: family_name,
                            email: emailToSearch,
                            username: emailToSearch,
                            password: 'HurRDuRrRiMGooGLEusER123'
                        })
                        
                    }
                })
                .then(newUser => {
                    const userToken = generateToken({
                        username: newUser.username,
                        id: newUser.id,
                        password: newUser.password
                    })
                    res.status(200).json({
                        token: userToken,
                        name: newUser.name
                    })
                })
                .catch(next)
            }
          }
        verify().catch(console.error);
    }

    
}

module.exports = Controller