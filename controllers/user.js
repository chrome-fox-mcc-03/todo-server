const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class UserController {
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(response => {
        let payload = {
          id: response.id,
          email: response.email
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
            res.status(200).json({
              token: generateToken(payload)
            });
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
  static gSignIn(req, res, next) {
    let obj = {
      password: process.env.DEFAULT_PASSWORD
    };
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);
    const token = req.body.token;
    client
      .verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
      })
      .then(ticket => {
        const payload = ticket.getPayload();
        // successfully obtained the ticket
        let gEmail = payload.email;
        // catch user data
        obj.email = gEmail;
        console.log(obj);
        // check whether email already exist or not
        return User.findOne({
          where: {
            email: gEmail
          }
        });
      })
      .then(resGmail => {
        if (resGmail) {
          // email is found, proceeding to log in
          return resGmail;
        } else {
          // email is not found, create a new account
          return User.create(obj);
        }
      })
      .then(resCreate => {
        // generate token
        let payload = {
          id: resCreate.id,
          email: resCreate.email
        };
        let token = generateToken(payload);
        res.status(200).json({
          token
        });
      })
      .catch(next);
  }
}

module.exports = UserController;
