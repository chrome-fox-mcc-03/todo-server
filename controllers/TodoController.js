const { Todo } = require('../models')

class TodoController {
  static findAll (req, res, next) {
    const { currentUserId } = req
    Todo.findAll({
      where: {
        UserId: currentUserId,
        GroupId: null
      },
      order: [['createdAt', 'DESC']]
    })
      .then(todos => {
        res.status(200).json(todos)
      })
      .catch(next)
  }

  static create (req, res, next) {
    const { title, description, status, due_date } = req.body
    const UserId = req.currentUserId 
    Todo.create({ title, description, status, due_date, UserId  })
      .then(() => res.status(201).json({ message: 'Create todo successful' }))
      .catch(next)
  }

  static findByPk (req, res, next) {
    const { id } = req.params
    Todo.findByPk(id)
      .then(todo => {
        if(!todo) next({
          status: 404,
          message: 'No Todo found'
        })
        else res.status(200).json(todo)
      })
      .catch(next) 
  }

  static edit (req, res, next) {
    const { id } = req.params
    const { currentUserId } = req
    const { title, description, status, due_date } = req.body
    Todo.update({ title, description, status, due_date }, {
      where: { 
        id,
        UserId: currentUserId,
        GroupId: null 
      }
    })
      .then(() => res.status(200).json({ message: 'Update todo successful' }))
      .catch(next)
  }

  static delete (req, res, next) {
    const { id } = req.params
    const { currentUserId } = req
    Todo.destroy({
      where: {
        id,
        UserId: currentUserId,
        GroupId: null
      }
    })
      .then(() => res.status(200).json({ message: 'Delete todo successful' }))
      .catch(next)
  }
}

module.exports = TodoController