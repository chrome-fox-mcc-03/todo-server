const {Todo, User} = require('../models')
const encrypt = require('../helper/bcrypt')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
class UserController{

    static Register(req, res, next) {
        const { Email, Password } = req.body  
        console.log(Password)
        User.create({
            Email:Email,
            Password: Password
        })
            .then(function(response) {
                let payloads = {
                    id: response.id,
                    Email: response.Email
                }
                res.status(200).json(payloads)
            })
            .catch(function(err) {
                next(err)
            })
    }
    

    static Login(req, res, next) {
        console.log('static login')
        User.findOne({
            where:{
                Email : req.body.Email
            }
        })
            .then(function(response) {
                if(response) {
                    if(bcryptjs.compareSync(req.body.Password, response.Password)) {
                        console.log('decrypt sama')
                        const access_token = jwt.sign({id:response.id}, process.env.JWT_SECRET)
                        const payload = {
                            id: response.id,
                            Email: response.Email
                        }
                        console.log('login')
                        res.status(200).json({payload, access_token})
                    }
                    else{
                        let err = {
                            name: "Wrong Username & Password"
                        }
                        throw err
                        
                    }
                }
            })
            .catch(function(err) {
                console.log(err)
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        let payload;
        const token = req.headers.access_token
        const ticket = client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(function(ticket) {
                payload = ticket.getPayload();
                const userid = payload['sub'];
                return User.findOne({
                    where:{
                        Email: payload.email
                    }
                })
            })
            .then(function(result) {
                if(result){
                    const access_token = jwt.sign({id:result.id}, process.env.JWT_SECRET)
                    const payloads = {
                        id: result.id,
                        Email: result.Email
                    }
                    res.status(200).json({payloads, access_token})
                }
                else{
                    User.create({
                        Email: payload.email,
                        Password: encrypt('default')
                    })
                        .then(function(result){
                            let payloads = {
                                id: result.id,
                                Email: result.Email
                            }
                            res.status(200).json(payloads)
                        })
                        .catch(function(err) {
                            next(err)
                        })
                }
            })
            .catch(function(err) {
                console.log(err)
            })
        console.log(ticket)
       
    }

}

module.exports = UserController