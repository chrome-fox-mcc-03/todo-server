'use strict'

const { User } = require('../models');
const { generateToken } = require('../helpers/generateToken');
const { comparePassword } = require('../helpers/hashPassword');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

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

  // Google Oauth

  static googleSign(req, res, next) {

    const gToken = req.headers.id_token;
    let userPayload;

    client.verifyIdToken({
      idToken: gToken,
      audience: process.env.CLIENT_ID
    }).then(ticket => {
      userPayload = ticket.getPayload();
      return User.findOne({
        where: {
          email: userPayload.email
        }
      })
    }).then(user => {
      if (user) {
        return user
      } else {
        let email = userPayload.email
        return User.create({
          email,
          password: process.env.DEFAULT_PASSWORD
        })
      }

    }).then(user => {
      const payload = {
        id: user.id,
        email: user.email
      }
      const token = generateToken(payload);
      console.log(token)
      res.status(200).json({ token })
    }).catch(next)
  }
}

module.exports = { UserController };
