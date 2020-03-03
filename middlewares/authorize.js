const { Todo, User } = require('../models')

module.exports = (req, res, next) => {
  const { id } = req.params
  const UserId = req.decoded.id

  Todo.findOne({
    where: { id },
    include: [User]
  })
    .then(data => {
      if (data) {
        if (data.dataValues.UserId === UserId) {
          next()
        } else {
          next({
            status: 401,
            message: "You haven't access to this ToDo"
          })
        }
      } else {
        next({
          status: 404,
          message: 'ToDo not found'
        })
      }
    })
    .catch(next)
}