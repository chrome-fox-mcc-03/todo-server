const {
    Todo
} = require('../models/index')
class Controller {
    static add(req, res, next) {
        let {
            title,
            description,
            status,
            due_date
        } = req.body
        Todo.create({
                title: title,
                description: description,
                status: status,
                due_date: due_date,
                UserId: req.decoded.id,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                next({
                    status: 400,
                    msg: {
                        err: err.errors[0].message
                    }
                })
            })
    }

    static get(req, res) {
        let UserId = req.decoded.id
        Todo.findAll({
            where:{
                UserId: UserId
            }
        })
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                next({
                    status: 500,
                    msg: {
                        err: 'Internal Error'
                    }
                })
            })
    }

    static getId(req, res) {
        let id = req.params.id
        Todo.findAll({
                where: {
                    id
                }
            })
            .then((result) => {
                res.status(200).json(result[0])
            })
            .catch(() => {
                next({
                    status: 404,
                    msg: {
                        err: 'Todo Not Found'
                    }
                })
            })
    }

    static put(req, res) {
        let id = req.params.id
        let {
            title,
            description,
            status,
            due_date
        } = req.body
        Todo.update({
                title: title,
                description: description,
                status: status,
                due_date: due_date
            }, {
                where: {
                    id: id
                },
                returning: true,
                plain: true
            })
            .then((result) => {
                res.status(200).json(result[1])
            })
            .catch((err) => {
                if (!err) {
                    next({
                        status: 404,
                        msg: {
                            err: 'Todo Not Found'
                        }
                    })
                } else {
                    next({
                        status: 400,
                        msg: {
                            err: err.errors[0].message
                        }
                    })
                }
            })
    }

    static delete(req, res) {
        let id = req.params.id
        let data;
        Todo.findByPk(id)
            .then((result) => {
                data = result
                return Todo.destroy({
                    where: {
                        id: id
                    }
                })
            })

            .then((result) => {
                res.status(200).json(data)
            })
            .catch(() => {
                res.status(500)
            })
    }

}


module.exports = Controller