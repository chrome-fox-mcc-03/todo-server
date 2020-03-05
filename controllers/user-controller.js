const { User } = require('../models/index');
const { compare } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');

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
                            const payload = { id: createdUser.id, email: createdUser.email }
                            let token = generateToken(payload)
                            res.status(201).json(token)
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

    static googleSignIn(req, res, next) {
        const myPayload = {};
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const token = req.headers.token;
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
            .then(ticket => {
                let payload = ticket.getPayload();
                myPayload.email = payload.email;
                // console.log('this is payload!', payload.email);
                return User.findOne({
                    where: {
                        email: myPayload.email
                    }
                })
            })
            .then(user => {
                if (user) {
                    return user;
                } else {
                    console.log('masuk ke else nggak?');
                    console.log(myPayload.email);
                    
                    return User.create({
                        email: myPayload.email,
                        password: process.env.DEFAULT_PASSWORD 
                    })
                }
            }) 
            .then(user => {
                console.log('this is user created', user);
                
                let myPayload = {
                    id: user.id,
                    email: user.email
                }
                let token = generateToken(myPayload);
                res.status(200).json(token)
                console.log(token);
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;