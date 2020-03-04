const sequelize = require("sequelize")
const jwt = require('jsonwebtoken');
const { User } = require("../models")
const { comparePassword } = require("../helpers/bcrypts.js")
const { generateToken } = require("../helpers/jwt.js")
const { CustomError } = require("../helpers/errorModel.js")
const { OAuth2Client } = require('google-auth-library')
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
const Op = sequelize.Op
let emailAddress
let userId
let payload
let passcode
let isLogin = false
let accessToken
let passwordMatchFlag


class UserController {

    static signup(req, res, next) {
        console.log(`masuk signup`);
        console.log(`req body`);
        console.log(req.body);

        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(result => {
            // console.log(result);
            // userId = result.dataValues.id
            // emailAddress = result.dataValues.email

            /* 
            1. buat payload pake jwt.sign
            2. kirim token pake res.status(201).json(token) //klo mau login
            2a. 
            */
        //    payload = {
        //        id: result.id,
        //        email: result.email
        //    }

        //    req.payload = payload
           res.status(201).json({datum: result, message: "Signup Success. Please Signin to Continue"})

        })
        .catch(err => {
            // console.log(`error ketemu`);
            // console.log(err);
            // if(err.name === "SequelizeValidationError") {
            //     res.status(400).json({error:err.name, message:err.message})
            // } else {
            //     res.status(500).json({error:err})
            // }
            next(err)
        })

    }

    static signin(req, res, next) {
        console.log(`login credentials`);
        console.log(req.body);
        emailAddress =  req.body.email
        passcode = req.body.password

        User.findOne({
            where: {
                email: emailAddress
            }
        })
        .then(response => {
            console.log(`Here is the login response `);
            console.log(response);

            passwordMatchFlag = comparePassword(passcode, response.password)
            // console.log(`does matching password success: ${passwordMatchFlag}`);

            if (passwordMatchFlag && response) {
                console.log(`Password match`);
                payload = {
                    id: response.dataValues.id,
                    email: emailAddress
                }
                accessToken = generateToken(payload, process.env.SECRET)

                console.log(`generated token`);
                console.log(accessToken);
                req.headers.token = accessToken;
               
                // req.payload = payload
                res.status(200).json({token: accessToken})

            } else {
                // console.log(`First error: `);
                // console.log(response);
                // res.status(401).json({error: "Wrong email/password"})
                throw new CustomError(400, "Invalid email/password")
            }
        })
        .catch(err => {
            // console.log(err);
            next(err)
        })

    }

    static googleSignin(req, res, next) {
        accessToken = req.headers.gToken
        googleClient.verifyIdToken({
            idToken: accessToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            console.log(`the ticket is`);
            console.log(ticket);
            payload = ticket.getPayload();
            userId = payload['sub']
            emailAddress = payload.email

            console.log(`google ticket's payload is`);
            console.log(payload);

            return User.findAll({
                where: {
                    email: emailAddress
                }
            })


        })
        .then(result1 => {
            if(result1.length === 0) {

                return User.create({
                    email: emailAddress,
                    password: "leviathan" //leviathan
                })
            } else {
                return result1[0]
            }
        })
        .then(result2 => {
            payload = {
                email: result2.email,
                password: result2.password
            }

            accessToken = generateToken(payload)
            req.headers.token = accessToken
            res.status(200).json({token: accessToken})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController