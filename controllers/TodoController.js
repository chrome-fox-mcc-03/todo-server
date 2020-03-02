const { Todo, Sequelize } = require("../models/index");

class TodoController {
    static getRoot(req, res, next) {
        Todo.findAll()
        .then(result => {
            res.status(200).json({
                todos: result
            });
        })
        .catch(err => {
            next(err);
        });
    }
    static getRootId(req, res, next) {
        let id = Number(req.params.id);
        Todo.findByPk(id)
        .then(result => {
            if (result === null) {
                throw new Sequelize.EmptyResultError("Item with id not found")
            } else {
                //for future: use session
                res.status(200).json({
                    todo: result.dataValues
                });
            }
        })
        .catch(err => {
            next(err)
        });
    }
    static postRoot(req, res, next) {
        let request = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }

        Todo.create(request)
        .then(result => {
            res.status(201).json({
                todo: result
            });
        })
        .catch(err => {
            next(err)
        });
    }
    static deleteRootId(req, res, next) {
        // console.log(req.params.id);
        let id = Number(req.params.id);
        Todo.findByPk(id)
        .then(result => {
            if (result === null) {
                throw new Sequelize.EmptyResultError("Item with id not found")
            } else {
                //for future: use session
                req.app.locals.deleted = result.dataValues;
                return Todo.destroy({
                    where: {
                        id: id
                    }
                });
            }
        })
        .then(result => {
            let item = req.app.locals.deleted;
            delete req.app.locals.deleted;
            let deleted = {
                title: item.title,
                description: item.description,
                status: item.status,
                due_date: item.due_date
            }
            res.status(200).json({
                deleted: deleted
            })
        })
        .catch(err => {
            next(err)
        });
    }
    static putRootId(req, res, next) {
        let id = Number(req.params.id);
        let body = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.findByPk(id)
        .then(result => {
            if (result === null) {
                throw new Sequelize.EmptyResultError("Item with id not found")
            } else {
                //for future: use session
                return Todo.update(body, {
                    where: {
                        id: id
                    }
                })
            }
        })
        .then(result => {
            if (result) {
                return Todo.findByPk(id);
            } else {
                throw new Error("Failed to update todo item");
            }
        })
        .then(result => {
            res.status(200).json({
                updated: result
            })
        })
        .catch(err => {
            next(err);
        });
    }
};

module.exports = TodoController;