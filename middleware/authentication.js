const JWT = require('../helper/jwt')
const { User } = require('../models')

module.exports = function(req, res, next) {
  const token = req.headers.token
  try {
    const decoded = JWT.verify(token, process.env.PRIVATE_KEY)
    User.findOne({where: {id: decoded.id}})
      .then(data => {
        if (data) {
          req.id = decoded.id
          console.log(55555555, req.id)
          next()
        } else {
          next({name: "DATA NULL", message: "Please log in again"})
        }
      })
  } catch(err) {
    next(err)
  }
}