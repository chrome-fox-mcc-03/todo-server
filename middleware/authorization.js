const { Todo } = require('../models')

module.exports = (req, res, next) => {
  let id = req.params.id
  Todo.findByPk(id)
    .then(todo => {
      if (todo) {
        if (todo.UserId === req.currentUserId) {
          next()
        } else {
          next ({
            name : 'Not Authorized'
          })
        }
      } else {
        next ({
          name : 'Not Authorized'
        })
      }
    })
}