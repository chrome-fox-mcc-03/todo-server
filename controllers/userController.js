const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register (req, res, next) {
    let payload = {
      name : req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User.create(payload)
      .then( user => {
        res.status(201).json(user)
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
}

module.exports = UserController