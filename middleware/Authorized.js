const { Todo } = require('../models')

module.exports = (req, res, next) => {
  const {  } = req.params
  Todo.findOne({
      where: {
        id
      }
    })
    .then(data => {
      if(data.UserId == req.currentId) {
        next()
      }else{
        throw {
          name: "costume",
          status: 403,
          message: "You don't have accses"
        }
      }
    })
    .catch(err => {
      next(err)
    })
}