'use strict';

const { User } = require('../models');

class UserController {
  static register(req, res) {
    let payload = {
      email: req.body.email,
      password: req.body.password
    };
    User.create(payload)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
  }

  static login(req, res) {
    let { email } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        res.send(err);
      });
  }

  static logout(req, res) {
    res.send(`ini logout`);
  }
}

module.exports = { UserController };
