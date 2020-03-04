const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(response => {
        let payload = {
          id: response.id,
          email: response.email,
          password: req.body.password
        };
        res.status(201).json(payload);
      })
      .catch(err => next(err));
  }

  static logIn(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(response => {
        if (response) {
          // email found
          if (checkPassword(req.body.password, response.password)) {
            // correct password
            let payload = {
              id: response.id,
              email: response.email
            };
            res.status(200).json(generateToken(payload));
          } else {
            // wrong password
            next({
              status: 400,
              msg: "email / password is wrong, please try again"
            });
          }
        } else {
          // email not found
          next({
            status: 400,
            msg: "email / password is wrong, please try again"
          });
        }
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;
