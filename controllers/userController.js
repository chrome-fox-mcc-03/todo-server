const { User } = require('../models');
const jwt = require("../helpers/jwt");
const ErrorModel = require('../helpers/error');
const bcrypt = require('../helpers/bcrypt');

class Controller {
    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
            .then((result) => {
                if (result) {
                    if (bcrypt.compare(password, result.password)) {
                        const payload = jwt.generateToken({ id: result.id });
                        res.status(200).json({ token: payload });
                    } else {
                        throw new ErrorModel(400, "invalid email / password");
                    }
                } else {
                    throw new ErrorModel(400, "invalid email / password");
                }
            }).catch(next);
    }

    static register(req, res, next) {
        const { email, password } = req.body;
        User.create({
            email,
            password
        })
            .then((result) => {
                const payload = jwt.generateToken({ id: result.id });
                res.status(201).json({ token: payload });
            }).catch(next);
    }
}

module.exports = Controller;
