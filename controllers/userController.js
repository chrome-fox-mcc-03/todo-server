const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
  static register (req, res, next) {
    let payload = {
      name : req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User.create(payload)
      .then( user => {
        let dataUser = {
          id : user.id,
          email: user.email
        }
        res.status(201).json(dataUser)
      })
      .catch(next)
  }

  static login (req, res, next) {
    let payload = {
      email : req.body.email,
      password : req.body.password
    }
    User.findOne({
      where : {
        email : payload.email
      }
    })
      .then( user => {
        if (user) {
          let status = checkPassword(payload.password, user.password)
          if (status) {
            let dataUser = {
              id : user.id,
              name : user.name,
              email : user.email
            }
            let token = generateToken(dataUser)
            res.status(200).json({
              accessToken : token
            })
          } else {
            next ({
              name : 'Invalid email/password'
            })
          }
        } else {
          next ({
            name : 'Invalid email/password'
          })
        }
      })
      .catch(next)
  }

  static googleSign(req, res, next) {
    let id_token = req.body.id_token
    let userData= ''
    client.verifyIdToken({
      idToken: id_token,
      audience: process.env.CLIENT_ID
    })
      .then(function(ticket) {
          userData = ticket.getPayload();
          return User.findOne({
              where : {
                  email : userData.email
              }
          })
      })
      .then(user => {
          if(user) {
              return user
          } else {
              return User.create({
                  name: userData.name,
                  email : userData.email,
                  password : process.env.DEFAULT_PASSWORD
              })
          }
      })
      .then(function(user) {
        let dataUser = {
          id : user.id,
          name : user.name,
          email : user.email
        }
          let token = generateToken(dataUser)
          res.status(200).json({
              accesToken : token
          })
      })
      .catch(next)
  }
}

module.exports = UserController