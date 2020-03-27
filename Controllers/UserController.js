const { User } = require('../models/index.js');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {

    static register(req, res, next) {
        let { email, password } = req.body
        
        User.create( { email, password } )
            .then(response => {
                let payload = {
                    id: response.id,
                    email: response.email
                }
                const token = generateToken(payload)
                res.status(201).json({ token, email: payload.email })
            })

            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;

        User.findOne({
            where: {
                email
            }
        })
            .then(response => {
                if(comparePassword(password, response.password)) {
                    let payload = {
                        id: response.id,
                        email: response.email
                    }
                    const token = generateToken(payload);

                    res.status(200).json(token)
                }
                else {
                    next({
                        status: 400,
                        message: "email / password invalid"
                    })
                }
            })
            .catch(err => {
                next({
                    status: 400,
                    message: "email / password invalid"
                })
            })
    }

    static googleLogIn(req, res, next) {
        let token = req.headers.token
        let email = "";
        console.log(process.env.CLIENT_ID);
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                email = ticket.payload.email
                return User.findOne({
                    where: { email }
                })
            })

            .then(result => {

                let password = "XdM4yhl6nGf91W876Qgv1uZa3UhEdM1qZ32J9sPanRoWWaPxVDQX8jK4RtpoGTpwSJJsNgC4CqA0vNDX8olyPw=="
                if(result) {
                    let id = result.id
                    let payload = {
                        id,
                        email
                    }

                    token = generateToken(payload);
                    return new Promise((resolve, reject) => {
                        resolve({token})
                    })
                }

                else {
                    return User.create({ email, password })
                }
            })

            .then(response => {

                if(response.token) {
                    res.status(200).json(response.token);
                }

                else {
                    let payload = {
                        id: response.id,
                        email: response.email
                    }
                    
                    token = generateToken(payload)
                    res.status(200).json(token)

                }                
            })

            .catch(err => {
                next(err)
            })

    }

}

module.exports = UserController