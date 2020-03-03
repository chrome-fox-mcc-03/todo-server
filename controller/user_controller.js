const { User } = require('../models/index.js');
const { checkPassword } = require('../helper/bycrypt.js');
const { generateToken } = require('../helper/jwt.js')


class UserController {
    static signUp(req, res) {
        let { email, password } = req.body;
        User.create({
            email,
            password
        })
            .then(result => {
                let data = {
                    id: result.id,
                    email: result.email
                }
                res.status(200).json(data);
            })
            .catch(error => {
                next({ error })
            })
    }

    static signIn(req, res) {
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
                        let payload = generateToken(data)
                        res.status(200).json(payload);
                    } else {
                        next({
                            status: 400,
                            message: `email/password salah`
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: `email/password salah`
                    })
                }

            })
            .catch(error => {
                next({ error })
            })
    }
}

module.exports = UserController