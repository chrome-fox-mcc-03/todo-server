const { Todo, User } = require('../models')

module.exports = {
  createTodo(req, res, next) {
    const { id } = req.decoded
    const { title, description, due_date } = req.body
    if (due_date === 'Invalid Date') {
      next({
        status: 400,
        message: due_date
      })
    } else {
      Todo.create({
        title, description, due_date, UserId: id
      })
        .then(_ => {
          res.status(201).json({
            message: 'success create ToDo'
          })
        })
        .catch(next)
    }
  },
  findAllTodo(req, res, next) {
    const { id } = req.decoded

    Todo.findAll({
      where: { UserId: id },
      include: [User],
      order: [['id', 'ASC']]
    })
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(next)
  },
  updateTodo(req, res, next) {
    const { id } = req.params
    const { title, description, due_date, status } = req.body

    Todo.update({
      title, description, due_date, status
    }, {
      where: { id },
      returning: true
    })
      .then(_ => {
        res.status(200).json({
          message: 'success update Todo'
        })
      })
      .catch(next)
  },
  destroyTodo(req, res, next) {
    const { id } = req.params

    Todo.destroy({
      where: { id }
    })
      .then(_ => {
        res.status(200).json({
          message: 'success delete Todo'
        })
      })
      .catch(next)
  },
  findOneTodo(req, res, next) {
    const { id } = req.params

    Todo.findOne({
      where: { id }
    })
      .then(data => {
        res.status(200).json({
          data: data.dataValues
        })
      })
      .catch(next)
  }
}