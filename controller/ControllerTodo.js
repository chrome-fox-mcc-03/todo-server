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
    static addTodoUser(req, res, next) {
        const {title, description, due_date} = req.body
        const { id } = req.currentId
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
                    )
                }
                else{
                    next({
                        name: "costume",
                        status: 404,
                        message: "Project is undifiend"
                    })
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
        const userId = req.currentId
        Todo.findOne(
            {
                where: {
                    UserId: userId
                }
            }
        )
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
                    )
                }
                else {
                    next({
                        name: "costume",
                        status: 404,
                        message: "Project is undifiend"
                    })
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static deleteTodoTeam (req, res, next) {
        const { id } = req.params
        Todo.findOne(
            {
                where: {
                    id
                }
            }
        )
            .then(data => {
                if(data) {
                    return Todo.destroy(
                        {
                            where: {
                                ProjectTeamId
                            }
                        }
                    )
                }else{
                    next({
                        name: "costume",
                        status: "404",
                        message: "ProjectTodo is undifiend"
                    })
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static deleteTodoUser (req, res, next) {
        const { id } = req.params
        const userId = req.currentId
        Todo.findOne(
            {
                where: {
                    UserId: userId
                }
            }
        )
            .then(data => {
                if(data) {
                    return Todo.destroy(
                        {
                            where: {
                                id
                            }
                        }
                    )
                }else{
                    next(
                        {
                            name: "costume",
                            status: 404,
                            message: "UserTodo is undifiend"
                        }
                    )
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerTodo