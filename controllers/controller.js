const { Todo } = require('../models')

module.exports = class Controller{
  static findAll(req, res) {
    Todo.findAll()
      .then(data => {res.status(200).json({ data })})
      .catch(err => {res.status(500).json({ err })})
  }

  static create(req, res) {
    console.log(req.body)
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date
    })
    .then(data => {res.status(201).json(data)})
    .catch(err => {err.name == "SequelizeValidationError" ? res.status(400).json(err.errors[0].message) : res.status(500).json({ err })}) //   // 
  }

  static findOne(req, res) {
    Todo.findOne({where: {id: req.params.id}})
      .then(data => data === null ? res.status(404).json({message: `DATA NOT FOUND`}) : res.status(200).json({ data }))
      .catch(err => res.status(500).json({ err }))
  }

  static update(req, res) {
    Todo.update({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date
    }, {where: {id : req.params.id}, returning: true})
      .then(data => data === null ? res.status(404).json({message: `DATA NOT FOUND`}) : res.status(200).json({ data }))
      .catch(err => err.name == "SequelizeValidationError" ? res.status(400).json(err.errors[0].message) : res.status(500).json({ err }))
  }

  static destroy(req, res) {
    let findOne
    Todo.findOne({where: {id: req.params.id}})
      .then(data => {
        if (data === null ) res.status(404).json({message: `DATA NOT FOUND`})
        findOne = data
        return Todo.destroy({where: {id: req.params.id}})
      })
      .then(result => res.status(200).json(findOne))
      .catch(err => res.status(500).json(err))
  }
}