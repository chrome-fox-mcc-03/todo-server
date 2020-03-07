const { User } = require('../models')
const { verifyToken } = require('../helpers')

module.exports = (req, res, next) => {
  const { token } = req.headers

  try {
    const { id, email } = verifyToken(token)

    User.findOne({
      where: { id: id || null, email }
    })
      .then(data => {
        if (data) {
          req.decoded = data.dataValues
          next()
        } else {
          next({
            message: 'please login first'
          })
        }
      })
      .catch(next)
  } catch (err) {
    next(err)
  }
}