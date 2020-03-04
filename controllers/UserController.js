'use strict';

const { User } = require('../models');
const { generateToken } = require('../helpers/generateToken');
const { comparePassword } = require('../helpers/hashPassword');

class UserController {
  static register(req, res, next) {
    let payload = {
      email: req.body.email,
      password: req.body.password
    };
    User.create(payload)
      .then(user => {
        let result = {
          id: user.id,
          email: user.email
        };
        res.status(201).json(result);
      })
      .catch(next);
  }

  static login(req, res, next) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (user) {
          const isCorrect = comparePassword(password, user.password);
          if (isCorrect) {
            const payload = { id: user.id };
            const token = generateToken(payload);
            res.status(200).json({ token });
          } else {
            // error 400
            next({
              status: 400,
              message: `Wrong email/password`
            });
          }
        } else {
          // error 400
          next({
            status: 400,
            message: `Wrong email/password`
          });
        }
      })
      .catch(next);
  }

  static logout(req, res) {
    res.send(`ini logout`);
  }
}

module.exports = { UserController };
