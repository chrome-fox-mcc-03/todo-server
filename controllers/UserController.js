const { User } = require('../models')
const  { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class UserController {
  static login (req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user.id) next({
          status: 400,
          message: 'Wrong email / password'
        })
        else {
          if (!compare(password, user.password)) {
            next({
              status: 400,
              message: 'Wrong email / password'
            })
          } else {
            const id = user.id
            const token = createToken(id)
            res.status(200).json({ token, username: user.username })
          }
        }
      })
      .catch(next)
  }

  static register (req, res, next) {
    const { username, email, password } = req.body
    User.create({ username, email, password })
      .then(() => {
        res.status(201).json({ message : 'Register successful' })
      })
      .catch(next)
  }

  static googleLogin (req, res, next) {}
}

module.exports = UserController