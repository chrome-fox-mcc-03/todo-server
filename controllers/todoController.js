const { Todo } = require('../models');

class Controller {
    static findAll(req, res) {
        Todo.findAll()
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                res.status(500).json(err);
            });
    }

    static create(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }

        Todo.create(data)
            .then((result) => {
                res.status(201).json(result);
            }).catch((err) => {
                res.status(500).json(err);
            });
    }

    static findById(req, res) {
        let todoId = req.params.id;
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    let error = new Error("id not found!");
                    res.status(404).json(error);
                }
            }).catch((err) => {
                res.status(500).json(err);
            });
    }

    static put(req, res) {
        let todoId = req.params.id;
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    return Todo.update(data, {
                        where: {
                            id: todoId
                        }
                    });
                } else {
                    throw new Error("id not found!");
                }
            })
            .then((result) => {
                return Todo.findByPk(todoId)
            })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }

    static delete(req, res) {
        let todoId = req.params.id;
        let deleted;
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    deleted = result
                    return Todo.destroy({
                        where: {
                            id: todoId
                        }
                    })
                } else {
                    throw new Error("id not found!");
                }
            })
            .then((result) => {
                res.status(200).json(deleted);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = Controller;
