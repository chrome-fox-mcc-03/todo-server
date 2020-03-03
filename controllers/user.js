const { User } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = process.env.PRIVATE_KEY

module.exports = class Controller{
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {const payload = {email: data.email, password: data.password}; res.status(201).json(payload)})
      .catch(err => err.name == "SequelizeValidationError" ? next(err) : next(err))
  }

  static login(req, res, next) {
    User.findOne({where: {email: req.body.email}})
    .then(data => {
      if (data) {
        if (comparePassword(req.body.password, data.password)) {
          const payload = {email: data.email, id: data.id}
          const token = jwt.sign({payload}, privateKey)
          res.status(200).json({token})
        } else {
        next({name: "PW ERROR",message: 'PW Email salah'})  
        }
      } else {
        next({name: "PW ERROR", message: 'PW Email salah'})
      }
    })
    .catch(err => next(err))
  }
}