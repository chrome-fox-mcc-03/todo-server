const { User } = require('../models/index.js');
const { checkPassword } = require('../helper/bycrypt.js');
const { generateToken } = require('../helper/jwt.js')
const { OAuth2Client } = require('google-auth-library');
const sendGrid = require('../helper/sendgrid.js')

class UserController {
    static signUp(req, res, next) {
        // console.log(`masuk`);
        
        let { email, password } = req.body;
        User.findOne({
            where: {
                email
            }
        })
        .then(result => {
            if (!result) {
                    User.create({
                        email,
                        password
                    })
                        .then(result => {
                            let data = {
                                id: result.id,
                                email: result.email
                            }
                            sendGrid(data.email);
                            let token = generateToken(data)
                            res.status(201).json({token});
                        })
                        .catch(error => {
                            next({ error })
                        })
                    } else {
                        // console.log(`masuk error`);
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
                        res.status(201).json({token});
                    } else {
                        next({
                            status: 400,
                            message: `wrong email/password`
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: `wrong email/password`
                    })
                }

            })
            .catch(error => {
                next({ error });
            })
    }

    static google(req, res, next) {
        const id_token = req.headers.id_token;
        // console.log(id_token)
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let googleAccount
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
        .then(result => {
            googleAccount = result.payload.email
            // console.log(googleAccount);
            
            return User.findOne({
                where: {
                    email: googleAccount
                }
            });
        })
        .then(result => {
            // console.log(result);

            if(result) {
                let data = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(data)
                res.status(201).json({ token });
            } else {                
                return User.create({
                    email: googleAccount,
                    password: 'admin',
                })
            }
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next({ error });
        })
    }
}


module.exports = UserController