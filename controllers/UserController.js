const { User } = require('../models/index');
const AppError = require('../helper/myCustomError');
const { hashPass, checkPass } = require('../helper/bcrypt')
const { getToken } = require('../helper/jwt');

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body;
        // console.log(email, password);
        let hash = hashPass(password);
        User.create({
            email: email,
            password: hash
        })
        .then(result => {
            res.status(200).json({
                id: result.id,
                email: result.email,
                message: "Email registered",
            })
        })
        .catch(err => {
            next(err);
        });
    }
    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
        .then(result => {
            // res.status(200).json(result);
            if (result) {
                if (checkPass(password, result.password)) {
                    //if password true
                    let payload = {
                        id : result.id,
                        email : result.email 
                    }
                    let token = getToken(payload)

                    res.status(200).json(token);
                    // req.headers.token = token;
                    // res.redirect("/todos")
                } else {
                    throw AppError(400, "Wrong email/password")
                }
            } else {
                throw AppError(400, "Wrong email/password")
            }
        })
        .catch(next);
    }
};

module.exports = UserController;