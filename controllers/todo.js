const { Todo } = require('../models')

module.exports = class Controller{
  static findAll(req, res, next) {
    Todo.findAll()
      .then(data => {
        const payload = data.map(el => { return {id: el.id, title: el.title, description: el.description, status: el.status, due_date: el.due_date}})
        res.status(200).json(payload)})
      .catch(err => {next(err)})
  }

  static create(req, res, next) {
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date
    })
    .then(data => {const payload = {id: data.id, title: data.title, description: data.description, status: data.status, due_date: data.due_date}; res.status(201).json(payload)})
    .catch(err => {next(err)}) //   // 
  }

  static findOne(req, res, next) {
  const id = req.params.id
    Todo.findOne({where: {id}})
      .then(data => {
        if (data) {
          const payload = {id: data.id, title: data.title, description: data.description, status: data.status, due_date: data.due_date }
          res.status(200).json(payload)
        } else {
          next({name: "DATA NULL", message: "DATA NONE"})
        }
      })
      .catch(err => {next(err)})
  }

  static update(req, res, next) {
    Todo.update({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date
    }, {where: {id : req.params.id}, returning: true})
      .then(data => {
        if (data[0] >= 1) {
        const payload = {id: data.id, title: data.title, description: data.description, status: data.status, due_date: data.due_date }
        res.status(200).json(payload)
      } else {
        next({name: "DATA NULL", message: "DATA NONE"})
      }})
      .catch(err => err.name == "SequelizeValidationError" ? next(err) : next(err))
  }

  static destroy(req, res, next) {
    let findOne
    Todo.findOne({where: {id: req.params.id}})
      .then(data => {
        if (data === null ) next({name: "DATA NULL", message: "DATA NOT FOUND"})
        findOne = {id: data.id, title: data.title, description: data.description, status: data.status, due_date: data.due_date}
        return Todo.destroy({where: {id: req.params.id}})
      })
      .then(result => res.status(200).json(findOne))
      .catch(err => next(err))
  }
}