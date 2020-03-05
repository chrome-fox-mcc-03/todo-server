const { User } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const JWT = require('../helper/jwt')

module.exports = class Controller{
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {const payload = {email: data.email, password: data.password}; res.status(201).json(payload)})
      .catch(err => next(err))
  }

  static login(req, res, next) {
    User.findOne({where: {email: req.body.email}})
    .then(data => {
      if (data) {
        if (comparePassword(req.body.password, data.password)) {
          const payload = {email: data.email, id: data.id}
          const token = JWT.sign(payload)
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

  static googlesign(req, res, next) {
    let email
    // console.log(req.headers.token)
    client.verifyIdToken({
      idToken: req.headers.token,
      audience: process.env.CLIENT_ID
    })
      .then(data => {
        email = data.payload.email
        // console.log('masuk then 1', data ,5555555)
        return User.findOne({where: { email }})
      })
      .then(data => {
        // console.log('masuk then 2', data ,321232123)
        if (data ) return data
        else {
          return User.create({email, password: process.env.GOOGLE_KEY})
        }
      })
      .then(() => {
        const token = JWT.sign({ email })
        res.status(200).json({ token })
      })
      .catch(err => {next(err)})

  }
}