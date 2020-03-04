const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');

module.exports = function(req, res, next) {

    try {

      const token = req.headers.token;
      req.decoded = verifyToken(token)
      
      User.findOne({
        where: {
          email: req.decoded.email
        }
      })
        .then(response => {
          next()
        })
        .catch(err => {
          next(err)
        })
    } 
    
    catch (err) {
      next(err)
    }
    
  }