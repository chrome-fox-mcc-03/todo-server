const { User } = require('../models')
const { checkPassword, createToken } = require('../helpers')

module.exports = {
  register(req, res, next) {
    const { username, email, password } = req.body

    User.create({
      username, email, password
    })
      .then(data => {
        res.status(201).json({
          data,
          message: 'success register'
        })
      })
      .catch(next)
  },
  login(req, res, next) {
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
  }
}