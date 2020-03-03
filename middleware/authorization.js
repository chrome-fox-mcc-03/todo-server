const { Todo } = require('../models')

function authorization(req, res, next) {
  Todo.findOne({
    where: {
      UserId: req.currentUserId
    }
  })
  .then((todo) => {
    if(todo) {
      next()
    } else {
      res.status(401).json({ message: `Not authorized`})
    }
  })
  .catch((err) => {
    res.status(401).json({ message: `Not authorized`})
  })
}

module.exports = authorization