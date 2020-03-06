const {
    OAuth2Client
} = require('google-auth-library');
const sendEmail = require('../helper/sendEmail')
const {
    User
} = require('../models/index')
const {
    comparePass
} = require('../helper/hashpassword')
const {
    tokenGenerate
} = require('../helper/jwt')


class Controller {
    static signUp(req, res, next) {
        let {
            email,
            password
        } = req.body
        User.findOne({
                where: {
                    email: email
                }
            })
            .then(result => {
                if (!result) {
                    User.create({
                            email: email,
                            password: password,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        })
                        .then(result => {
                            let payload = {
                                id: result.id,
                                email: result.email
                            }
                            sendEmail(email)

                            res.status(200).json(payload)
                        })
                        .catch(err => {
                            next({
                                status: 400,
                                msg: {
                                    err: err.errors[0].message
                                }
                            })
                        })
                } else {
                    next({
                        status: 400,
                        msg: {
                            err: 'email already exists'
                        }
                    })
                }
            })
    }

    static signIn(req, res) {
        let email = req.body.email
        User.findOne({
                where: {
                    email: email
                }
            })
            .then(result => {
                let checkPass = comparePass(req.body.password, result.password)
                if (checkPass) {
                    let payLoad = {
                        id: result.id,
                        email: result.email
                    }
                    let token = tokenGenerate(payLoad)
                    res.status(200).json(token)
                } else res.status(400).json('email / password is Wrong')
            })
    }

    static gooSignIn(req, res, next) {
        const emailCheck = {}
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const token = req.headers.token
        client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID
                // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            })
            .then(ticket => {
                let payLoad = ticket.getPayload()
                emailCheck.email = payLoad.email

                return User.findOne({
                    where: {
                        email: emailCheck.email
                    }
                })
            })
            .then(user => {
                if (user) {
                    User.findOne({
                            where: {
                                email: emailCheck.email
                            }
                        })
                        .then(result => {
                            let checkPass = comparePass(process.env.password, result.password)
                            if (checkPass) {
                                let payLoad = {
                                    id: result.id,
                                    email: result.email
                                }
                                let token = tokenGenerate(payLoad)
                                res.status(200).json(token)
                            } else res.status(400).json('email / password is Wrong')
                        })



                } else {
                    User.create({
                            email: emailCheck.email,
                            password: process.env.password,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        })
                        .then(result => {
                            let payload = {
                                id: result.id,
                                email: result.email
                            }
                            let token = tokenGenerate(payload)
                            /// send email di comment karena terkadang kena limit dr restdb
                            // sendEmail(email)
                            res.status(200).json(token)
                        })
                        .catch(err => {
                            next({
                                status: 400,
                                msg: {
                                    err: err.errors[0].message
                                }
                            })
                        })



                }
            })
            .catch(err => {
                console.log(err);

                console.log('tes catch');


            })

    }
}

module.exports = Controller