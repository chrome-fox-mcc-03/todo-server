const { User } = require('../models');
const jwt = require("../helpers/jwt");
const ErrorModel = require('../helpers/error');
const bcrypt = require('../helpers/bcrypt');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Controller {
    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
            .then((result) => {
                if (result) {
                    if (bcrypt.compare(password, result.password)) {
                        const payload = jwt.generateToken({ id: result.id });
                        res.status(200).json({ token: payload });
                    } else {
                        throw new ErrorModel(400, "invalid email / password");
                    }
                } else {
                    throw new ErrorModel(400, "invalid email / password");
                }
            }).catch(next);
    }

    static register(req, res, next) {
        const { email, password } = req.body;
        User.create({
            email,
            password
        })
            .then((result) => {
                const payload = jwt.generateToken({ id: result.id });
                res.status(201).json({ token: payload });
            }).catch(next);
    }

    static googleLogin(req, res, next) {
        let gtoken = req.headers.gtoken
        let payload;

        client.verifyIdToken({
            idToken: gtoken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then((result) => {
            payload = result.getPayload();
            console.log(payload);
            return User.findOne({
                where: {
                    email: payload.email
                },
            })
        })
        .then((result) => {
            if(result) {
                return { id: result.id };
            } else {
                return User.create({
                    email: payload.email,
                    password: payload.email + "g"
                })
            }
        })
        .then((result) => {
            console.log(result); 
            const payload = jwt.generateToken({ id: result.id })
            res.status(200).json({ token: payload })
        })
        .catch(next);
    }
}

module.exports = Controller;
