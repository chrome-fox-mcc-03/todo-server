const { verify } = require('../helper/jwt')
const { User } = require('../models')

function authentication(req, res, next) {
  try {    
    if(req.headers.token) {
      const decoded = verify(req.headers.token)
      req.currentUserId = decoded.id
      User.findByPk(
        Number(req.currentUserId)
      )
        .then((result) => {
          if (result) {
            next()
          } else {
            next({ name: 'Not authenticated' })
          }
        })
        .catch((err) => {
          next(err)
        })
    } else {
      next({ name: 'Not authenticated' })
    }
  }
  catch (err) {
    next(err)
  }
}

module.exports = authentication