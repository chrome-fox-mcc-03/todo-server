const { User, Todo } = require('../models')
const { verify } = require('../helpers/jwt')

module.exports = {
  authentication(req, res, next) {
    const { token } = req.headers
    const decoded = verify(token)
    if (decoded.message) next({
      status: 401,
      message: decoded.message
    }) 
    else {
      const id = decoded.id
      User.findByPk(id)
        .then(user => {
          if (!user.id) next({
            status: 401,
            message: 'User cannot be found. Please register first!'
          })
          else {
            req.currentUserId = id
            next()
          }
        })
        .catch(next)
    }
  },

  authorization(req, res, next) {
    const userId = req.currentUserId
    const todoId = req.params.id
    Todo.findOne({
      where: {
        id: todoId,
        UserId: userId,
        GroupId: null 
      }
    })
      .then(todo => {
        if (!todo.id) next({
          status: 401,
          message: 'User can only modify their own todo'
        })
        else next()
      })
      .catch(next)
  },

  groupAuthorization(req, res, next) {
    const userId = req.currentUserId
    const groupId = req.params.id
    const todoId = req.params.todoId

    Todo.findOne({
      where: {
        id: todoId,
        GroupId: groupId
      }
        .then(todo => {
          if(!todo.id) next({
            status: 401,
            message: 'You are not belong to this group'
          }) 
          else next()
        })
        .catch(next)
    })
  }
}