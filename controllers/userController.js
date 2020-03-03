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
}

module.exports = Controller