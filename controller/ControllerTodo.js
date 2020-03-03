const { Todo } = require('../models')

class ControllerTodo {
	  static findAll(req, res, next) {
		Todo.findAll()
			.then(data => {
        res.status(200).json(data)
			})
			.catch(err => {
        next(err)
			})
    }
    static findOneTodoUser(req, res, next) {
      const { id } = req.params
      Todo.findOne(
        {
          where: {
            id
          }
        }
      )
        .then(data => {
          if(data != null){
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
    static addTodoUser(req, res, next) {
		const {title, description, due_date} = req.body
		const id = req.currentId
			Todo.create({
        title,
        description,
        status: false,
        due_date,
        UserId: id
			})
				.then(data => {
          res.status(201).json(data)
				})
				.catch(err => {
          next(err)
				})
    }
    static addTodoTeam (req, res, next) {
		const {title, description, due_date} = req.body
		Todo.create({
      title,
      description,
      due_date,
      ProjectTeamId: id
		})
			.then(data => {
        res.status(201).json(data)
			})
			.catch(err => {
        next(err)
			})
    }
    static updateTodoTeam (req, res, next) {
    const { status } = req.body
    const { id } = req.params
      Todo.findOne({
        where: {
          ProjectTeamId: teamId
        }
      })
        .then(data => {
          if(data) {
            return Todo.update(
              {
                status
              },
              {
                where: {
                  id
                }
              }
          )}
          else{
            throw {
              name: "costume",
              status: 404,
              message: "Project is undifiend"
            }
          }
        })
        .then(data => {
          res.status(200).json(data)
        })
        .catch(err => {
          next(err)
        })
    }
    static updateTodoUser (req, res, next) {
			const { status } = req.body
			const { id } = req.params
			Todo.findOne({
            where: {
              id
            }
					})
					.then(data => {
            if(data !== null) {
                return Todo.update(
                  {
                    status
                  },
                  {
                    where: {
                      id
                    },
                    returning: true
                  }
                )
            }
            else{
              throw {
                name: 'costume',
                status: 404,
                message: "data not found"
              }
            }
					})
					.then(data => {
            res.status(200).json(data[1])
					})
					.catch(err => {
            next(err)
					})
    }
    static deleteTodoTeam (req, res, next) {
        const { id } = req.params
        Todo.destroy(
              {
                where: {
                  ProjectTeamId
                }
              }
            )
            .then(data => {
              if(data) {
                res.status(200).json({note: 'delete succses'})
              }else {
                next({
                  name: "costume",
                  status: 404,
                  message: "TodoUser not Found"
                })
              }
            })
            .catch(err => {
              next(err)
            })
    }
    static deleteTodoUser (req, res, next) {
    const { id } = req.params
      Todo.findOne(
        {
          where: {
            id
          }
        }
      )
        .then(data => {
            if(data != null){
              return Todo.destroy({
                where: {
                  id
                }
              })
            }else{
              throw {
                name: "costume",
                status: 404,
                message: "TodoUser not Found"
              }
            }
        })
        .then(data => {
          res.status(200).json({note: 'delete succses'})
        })
        .catch(err => {
          next(err)
        })
    }
}

module.exports = ControllerTodo