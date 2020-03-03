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
            let payload = {
                id: result.id,
                email: result.email
            } 
            res.status(200).json(payload);
        })
        .catch(error => {
            res.status(500).json(error);
        })
    }

    static signIn(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(result => {
            let unhashedPassword = checkPassword(req.body.password, result.password) 
            if(unhashedPassword) {
                let payload = { 
                    email: unhashedPassword.email,
                    id: unhashedPassword.id
                }
                payload = generateToken(payload)
                res.status(200).json(payload);
            } else {
                res.status(400).json(`email/password salah`);
            }
        })
        .catch(error => {
            res.status(400).json(error);
        })
    }
}

module.exports = UserController