const { User } = require('../models/index');
const { compare } = require('../helpers/bcrypt');
const generateToken = require('../helpers/jwt');

class UserController {
    static signUp(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then((createdUser) => {
                let { id, email } = createdUser
                res.status(201).json({ id, email })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static signIn(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((userFound) => {
                const pw = compare(req.body.password, userFound.password);
                if (pw) {
                    const payload = { id: userFound.id, email: userFound.email }
                    let token = generateToken(payload)
                    res.status(200).json(token)
                } else {
                    res.status(401).json('Username/password invalid')
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController;