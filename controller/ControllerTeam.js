const { ProjectTeam, Project } = require('../models')

class ControllerProjectItem {
  static createTeam (req, res ,next) {
    ProjectTeam.findAll()
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next()
      })
  }
  static findOne(req, res, next) {
    ProjectTeam.findOne(
      {
        where: {
          id
        },
        include: [Project]
      }
    )
      .then(data => {
        if(data != null) {
          res.status(200).json(data)
        }else{
          throw {
            name: "costume",
            status: 404,
            message: "data not found"
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }
  static update (req, res, next) {
    ProjectTeam.update(
      {
        name
      },
      {
        where: {
          id
        },
        returning: true
      }
    )
  }
}