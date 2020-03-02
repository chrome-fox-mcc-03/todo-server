const { Todo, Sequelize } = require("../models/index");

class TodoController {
    static getRoot(req, res) {
        Todo.findAll()
        .then(result => {
            res.status(200).json({
                todos: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        });
    }
    static getRootId(req, res) {
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
        .catch(Sequelize.EmptyResultError, err => {
            res.status(404).json({
                error: err.message
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        });
    }
    static postRoot(req, res) {
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
        .catch(Sequelize.ValidationError, err => {
            let msg = err.errors.map(item => item.message)
            res.status(400).json({
                error: msg
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        });
    }
    static deleteRootId(req, res) {
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
        .catch(Sequelize.EmptyResultError, err => {
            res.status(404).json({
                error: err.message
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        });
    }
    static putRootId(req, res) {
        // console.log(req.body)
        let id = Number(req.params.id);
        let body = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        console.log(id);
        console.log(body);
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
        .catch(Sequelize.EmptyResultError, err => {
            res.status(404).json({
                error: err.message
            })
        })
        .catch(Sequelize.ValidationError, err => {
            let msg = err.errors.map(item => item.message)
            res.status(400).json({
                error: msg
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        });
    }
};

module.exports = TodoController;