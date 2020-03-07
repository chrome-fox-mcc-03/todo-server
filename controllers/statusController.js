const { Status } = require('../models')

class StatusController {
  static findAll (req, res, next) {
    Status.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = StatusController