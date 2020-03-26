const { user } = require('./../models')
const makeToken = require('./../helper/jwt').makeToken
const comparePass = require('./../helper/bcrypt').comparePass
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE);
// console.log(client)

class ControllerUser{
    static register(req,res, next){
        const { email, password } = req.body
        user.create({
            email,
            password
        }) 
            .then(user => {
                let display = {
                    id: user.id,
                    email: user.email
                }
                res.status(201).json(display)
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req,res,next){
        const { email, password } = req.body
        user.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if (!user) {
                    throw({name: "errorLogin", errors: [{message: "Email / Password invalid"}]})
                } else {
                    const authenticate = comparePass(password, user.password)
                    if (authenticate) {
                        const payload = {
                            id: user.id,
                            email: user.email
                        }
                        const token = makeToken(payload)
                        req.headers.token = token
                        res.status(200).json({ token })
                    } else {
                        throw({name: "errorLogin", errors: [{message:"Email / Password invalid"}]})
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static loginGoogle(req,res,next){
        let email
        let token = req.headers.id_token
        // console.log('======')
        // console.log(req.headers)
        client.verifyIdToken({
            idToken : token,
            audience : process.env.CLIENT_ID_GOOGLE

        })
            .then(ticket => {
                const payload = ticket.getPayload()
                const userid = payload['sub']
                email = payload.email
                // res.status(200).json(payload)
                console.log(payload)
                return user.findAll({
                    where: {
                        email
                    }
                })
            })
            .then(result => {
                if (result.length === 0) {
                    return user.create({
                        email,
                        password: 'admin'
                    })
                } else {
                    return result[0]
                }
                // console.log(result)
            })
            .then(result => {
                const payload = {
                    id: result.id,
                    email: result.email
                }
                const token = makeToken(payload)
                req.headers.token = token
                res.status(200).json({ token })
            })
            .catch(err => {
                console.log(err);
                
                next(err)
            })
    }
}

module.exports = ControllerUser