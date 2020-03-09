const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
  if (!req.headers.token) {
    next({
      name: 'Please login first'
    })
  } else {
    try {
      let decoded = verifyToken(req.headers.token)
      User.findByPk(decoded.id)
        .then(user =>  {
          if (user) {
            req.currentUserId = decoded.id
            req.name = decoded.name
            req.email = decoded.email
            next()
          } else {
            next ({
              name : 'Invalid Token Errors'
            })
          }
        })
        .catch(next) 
    } catch (err) {
      next({
        name: 'Invalid Token Errors'
      })
    }
  }
}