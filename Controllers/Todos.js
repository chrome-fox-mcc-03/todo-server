const { Todo, User } = require('../models')

class TodoController {

  static Create(req, res, next) {
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date,
      UserId: req.currentUserId
    })
    .then((todo) => {
      res.status(201).json({todo})
    })
    .catch(next)
  }

  static Display(req, res, next) {
    Todo.findAll({
      where: {
        UserId: req.currentUserId
      },
      include:[{
        model: User,
        attributes: {
          exclude: ['password']
        }
      }]
    })
    .then((todo) => {
      res.status(200).json(todo)
    })
    .catch(next)
  }

  static FindId(req, res, next) {
    let id = req.params.id
    Todo.findByPk(id)
    .then((todo) => {
      if(!todo) {
        next({name: 'Todo not found'})
      }
      else {
        res.status(200).json({todo})
      }
    })
    .catch(next)
  }

  static Update(req, res, next) {
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
      console.log(data);
      
      if(!data[1]) {
        next({name: 'Todo not found'})
      }
      else {
        res.status(200).json({data: data[1][0]})
      }
    })
    .catch(next)
    
  }

  static Delete(req, res, next) {
    let id = req.params.id
    Todo.destroy({
      where: {
        id:id
      }
    })
    .then((todo) => {
      if(!todo) {
        next({name: 'Todo not found'})
      }
      else {
        res.status(200).json(todo)
      }
    })
    .catch(next)
  }

}

module.exports = TodoController