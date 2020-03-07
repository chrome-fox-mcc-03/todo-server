const { User } = require('../models')
const { checkPassword, createToken } = require('../helpers')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
  signUp(req, res, next) {
    const { username, email, password } = req.body

    User.create({
      username, email, password
    })
      .then(_ => {
        res.status(201).json({
          message: 'success register'
        })
      })
      .catch(next)
  },
  SignIn(req, res, next) {
    const { email, password } = req.body

    User.findOne({
      where: { email }
    })
      .then(data => {
        if (data) {
          const check = checkPassword(password, data.password)
          if (check) {
            const token = createToken({
              id: data.id,
              email: data.email
            })
            res.status(200).json({
              token,
              message: `success login as ${data.username}`
            })
          } else {
            next({
              status: 400,
              message: 'Invalid email / password'
            })
          }
        } else {
          next({
            status: 400,
            message: 'Invalid email / password'
          })
        }
      })
      .catch(next)
  },
  gSignIn(req, res, next) {
    let email = ''

    client.verifyIdToken({
      idToken: req.headers.token,
      audience: process.env.CLIENT_ID
    })
      .then(data => {
        email = data.payload.email
        return User.findOne({ where: { email } })
      })
      .then(data => {
        if (data) {
          return data
        } else {
          return User.create({
            username: email,
            email,
            password: process.env.G_SECRET
          })
        }
      })
      .then(data => {
        const token = createToken({
          id: data.dataValues.id,
          email: data.dataValues.email
        })
        res.status(200).json({
          token,
          message: `Success login as ${data.dataValues.email}`
        })
      })
      .catch(next)
  }
}