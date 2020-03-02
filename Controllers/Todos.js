const { Todo } = require('../models')

class TodoController {

  static Create(req, res) {
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date
    })
    .then((todo) => {
      res.status(201).json({todo})
    })
    .catch((err) => {
      let status = 500;
      if(err.name === 'SequelizeVlaidationError') {
        status = 400
      }
      res.status(status).json(err)
    })
  }

  static Display(req, res) {
    Todo.findAll()
    .then((todo) => {
      res.status(200).json({todo})
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static FindId(req, res) {
    let id = req.params.id
    Todo.findByPk(id)
    .then((todo) => {
      if(!todo) {
        res.status(404).json({ err: `error not found` })
      }
      else {
        res.status(200).json({todo})
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static Update(req, res) {
    let id = req.params.id
    Todo.update({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date
    }, {
      where: {
        id: id
      },
      returning: true
    })
    .then((data) => {
      if(!data[0]) {
        res.status(404).json({ err: `error not found` })
      }
      else {
        res.status(200).json({todo})
      }
    })
    .catch((err) => {
      let status = 500;
      if(err.name === 'SequelizeValidationError') {
        status = 400
      }
      res.status(status).json(err)
    })
  }

  static Delete(req, res) {
    let id = req.params.id
    Todo.destroy({
      where: {
        id:id
      }
    })
    .then((todo) => {
      if(!todo) {
        res.status(404).json({ err: `error not found`})
      }
      else {
        res.status(200).json(todo)
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

}

module.exports = TodoController