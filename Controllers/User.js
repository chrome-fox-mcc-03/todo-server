const { User } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const { token } = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library');

class UserController {
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then((User) => {
        console.log(User);
        let payload = {
          id: User.id,
          email: User.email
        }
        res.status(201).json(payload)
      })
      .catch(next)
  }

  static logIn(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email,
      }
    })
      .then((User) => {
        if (User) {
          let status = comparePassword(req.body.password, User.password)
          // console.log(req.body.password);
          // console.log(User.password);
          if (status) {
            let payload = {
              id: User.id,
              email: User.email
            }
            let accessToken = token(payload)
            res.status(200).json(accessToken)
          } else {
            next({ name: 'email or password wrong' })
          }
        } else {
          next({ name: 'email or password wrong' })
        }
      })
      .catch(next)
  }

  static googleSignin(req, res, next) {
    // console.log("============");
    
    let obj = {}
    const token = req.headers.token
    const client = new OAuth2Client(process.env.CLIENTID);
    client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENTID // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
    .then((ticket) => {
      let payload = ticket.getPayload()
      // console.log(payload);
      
      obj.email = payload.email
      return User.findOne({
        where: {
          email: obj.email
        }
      })
    })
    .then((user) => {
      
      if(!user) {
        return User.create({
          email: obj.email,
          password: process.env.DEFAULTPASSWORD
        })
      }
      else {
        return user
      }
    })
    .then((user) => {
      // console.log(user);
      let payload = {
        id: user.id,
        email: user.email
      }
      // console.log(payload, 9999999999999999999999999999999999999);
      let atoken = token(payload)
      
      res.status(200).json(atoken)
    })
    .catch(next)
  }
}

module.exports = UserController