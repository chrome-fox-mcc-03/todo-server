const { Group, User } = require('../models')

class GroupController {
  static findAllGroup (req, res, next) {
    const { currentUserId } = req
    Group.findAll({
      include: [{
        model: User,
        where: { id: currentUserId }
      }]
    })
      .then(groups => res.status(200).json(groups))
      .catch(next)
  }
}