const { Todo, User } = require('../models')

module.exports = function(req, res, next) {
  console.log(req.id, 55555555555555555)
  Todo.findOne({where: {id: req.params.id}})
    .then(data => {
      if (data === {}) next({name: "DATA NULL", message: "DATA NOT FOUND!"})
      console.log(data.UserId, 696969696969)
      if (data.UserId === req.id) {next()}
      else {next({name: "DATA NULL", message: "DATA NOT FOUND!"})}
    })
    .catch(err => next(err))
}