const { User } = require('../models/index');
const AppError = require('../helper/myCustomError');
const { checkPass } = require('../helper/bcrypt');
const { getToken } = require('../helper/jwt');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID_AUTH, process.env.GOOGLE_CLIENT_SECRET_AUTH);


class UserController {
    static register(req, res, next) {
        const { email, password } = req.body;
        // console.log(email, password);
        if (!email || !password) {
            next(AppError(400, "Email & password is required"))
        }
        User.create({
            email: email,
            password: password
        })
        .then(result => {
            let payload = {
                id : result.id,
                email : result.email 
            }
            let token = getToken(payload)
            
            res.status(200).json({
                id: result.id,
                email: result.email,
                message: "Email registered",
                token: token,
            })
        })
        .catch(err => {
            next(err);
        });
    }
    static login(req, res, next) {
        const { email, password } = req.body;
        if (!email || !password) {
            next(AppError(400, "Email / password is required"))
        }
        User.findOne({
            where: {
                email: email
            }
        })
        .then(result => {
            // res.status(200).json(result);
            if (result) {
                if (checkPass(password, result.password)) {
                    //if password true
                    let payload = {
                        id : result.id,
                        email : result.email 
                    }
                    let token = getToken(payload)

                    res.status(200).json(token);
                    // req.headers.token = token;
                    // res.redirect("/todos")
                } else {
                    throw AppError(400, "Wrong email/password")
                }
            } else {
                throw AppError(400, "Wrong email/password")
            }
        })
        .catch(next);
    }
    static gAuth(req, res, next) {
        // let accessToken = req.body.gAccessToken;
        let accessToken = req.header('gAccessToken')
        // console.log(accessToken);
        // res.status(200).json(accessToken);
        client.verifyIdToken({
            idToken: accessToken,
            audience: process.env.GOOGLE_CLIENT_ID_AUTH,
        })
        .then(ticket => {
            let gPayload = ticket.getPayload();
            let payload = {
                email: gPayload.email,
                name: gPayload.name,
            }
            req.app.locals.payload = payload;
            // res.status(200).json(payload);
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(result => {
            if (result) {
                //if google mail registered
                let payload = {
                    id : result.id,
                    email : result.email 
                }
                let token = getToken(payload)
                // return new Promise(token);
                res.status(200).json({
                    id: result.id,
                    email: result.email,
                    message: "Email registered",
                    token: token,
                })
            } else {
                let payload = req.app.locals.payload;
                delete req.app.locals.payload;
                payload.password = process.env.LE_SECRET;
                return User.create({
                    email: payload.email,
                    password: payload.password,
                })
            }
        })
        .then(result => {
            let payload = {
                id : result.id,
                email : result.email 
            }
            let token = getToken(payload)
            
            res.status(200).json({
                id: result.id,
                email: result.email,
                message: "Email registered",
                token: token,
            })
        })
        .catch(next)
    }
};

module.exports = UserController;