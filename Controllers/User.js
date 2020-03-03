const { User } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const token = require('../helper/jwt')

class Controller {
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
      if(User) {
        let status = comparePassword(req.body.password, User.password)
        if(status) {
          let payload = {
            id: User.id,
            email: User.email
          }
          let accessToken = token(payload)
          res.status(200).json({accessToken})
        } else {
          next({name: 'email or password wrong'})
        }
      } else {
        next({name: 'email or password wrong'})
      }
    })
    .catch(next)
  }
}

module.exports = Controller