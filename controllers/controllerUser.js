const { user } = require('./../models')
const makeToken = require('./../helper/jwt').makeToken
const comparePass = require('./../helper/bcrypt').comparePass

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
                        res.status(200).json(token)
                    } else {
                        throw({name: "errorLogin", errors: [{message:"Email / Password invalid"}]})
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerUser