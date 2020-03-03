const { User } = require('../models/index.js');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {

    static register(req, res, next) {
        let { email, password } = req.body
        
        User.create( { email, password } )
            .then(response => {
                let payload = {
                    id: response.id,
                    email: response.email
                }

                res.status(201).json(payload)
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
                        status: 401,
                        message: "email / password invalid"
                    })
                }
            })
            .catch(err => {
                next({
                    status: 401,
                    message: "email / password invalid"
                })
            })
    }

}

module.exports = UserController