const { verify } = require('../helper/jwt')
function authentication(req, res, next) {
  try {
    if(req.headers.token) {
      const decoded = verify(req.headers.token)
      req.currentUserId = decoded.id
      next()
    } else {
      next({name: 'Not authenticated'})
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authentication