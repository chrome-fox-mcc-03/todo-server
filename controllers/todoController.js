const { Todo, Status, User } = require('../models')
const axios = require('axios')
const formatDate = require('../helpers/formatDate')

class TodoController {
  
  static create (req, res, next) {
    let dataTodo
    let payload = {
      title: req.body.title,
      description: req.body.description,
      StatusId: req.body.StatusId,
      due_date: req.body.due_date,
      UserId: req.currentUserId
    }
    Todo.create(payload, {
      include : {
        model: User
      }
    })
      .then(todo => {
        res.status(201).json(todo)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
  }

  static findAll (req, res, next) {
    Todo.findAll({
      where : {
        UserId : req.currentUserId
      },
      include : [
        {
          model : Status
        }, {
          model : User,
          attributes : {
            exclude : ['password']
          }
        }
      ]
    })
      .then( todos => {
        res.status(200).json(todos)
      })
      .catch(next)
  }

  static findOne (req, res, next) {
    let id = req.params.id
    let datatodo
    Todo.findOne({
      where : {
        id : id,
        UserId : req.currentUserId
      },
      include : [{
        model: Status
      }, {
        model: User,
        attributes: {
          exclude : ['password']
        }
      }]
    })
      .then( todo => {
        if (todo) {
          datatodo = todo
          // res.status(200).json(todo)
          return Status.findAll()
        } else {
          next({name : 'Not Found'})
        }
      })
      .then(statuses => {
        res.status(200).json({
          dataTodo: datatodo,
          dataStatus: statuses
        })
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
      include : [{
        model: Status
      }, {
        model : User,
        attributes : {
          exclude: ['password']
        }
      }],
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
        if (data) {
          res.status(200).json({
            message : 'Deleted Todo successfully'
          })
        } else {
          next ({
            name: 'Not Found'
          })
        }
      })
      .catch(next)
  }
}

module.exports = TodoController