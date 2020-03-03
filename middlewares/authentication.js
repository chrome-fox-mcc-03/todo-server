const { verifyToken } = require('../helpers/jwt')

module.exports = function(req, res, next) {

    try {

      const token = req.headers.token;
      req.decoded = verifyToken(token)
      next()

    } 
    
    catch (err) {
      next(err)
    }
    
  }