const { Todo, Status } = require('../models')

class TodoController {
  static create (req, res, next) {
    let payload = {
      title: req.body.title,
      description: req.body.description,
      StatusId: req.body.StatusId,
      due_date: req.body.due_date
    }
    Todo.create(payload)
      .then(todo => {
        let dataTodo = {
          title: todo.title,
          description: todo.description,
          StatusId: todo.StatusId,
          due_date: todo.due_date
        }
        res.status(201).json(dataTodo)
      })
      .catch(next)
  }

  static findAll (req, res, next) {
    Todo.findAll({
      include : {
        model : Status
      }
    })
      .then( todos => {
        res.status(200).json(todos)
      })
      .catch(next)
  }

  static findOne (req, res, next) {
    let id = req.params.id
    Todo.findOne({
      where : {
        id : id
      },
      include : {
        model : Status
      }
    })
      .then( todo => {
        if (todo) {
          res.status(200).json(todo)
        } else {
          next({name : 'Not Found'})
        }
      })
      .catch(next)
  }

  static update (req, res, next) {
    let id = req.params.id
    let payload = {
      title: req.body.title,
      description: req.body.description,
      StatusId: req.body.StatusId,
      due_date: req.body.due_date
    } 
    Todo.update(payload, {
      where : {
        id : id
      },
      include : {
        model: Status
      },
      returning : true
    })
      .then( todo => {
        res.status(200).json(todo[1][0])
      })
      .catch(next)
  }

  static delete (req, res, next) {
    let id = req.params.id
    Todo.destroy({
      where : {
        id : id
      }
    })
      .then( data => {
        res.status(200).json({
          message : 'Deleted Todo successfully'
        })
      })
      .catch(next)
  }
}

module.exports = TodoController