const {Todo} = require("../models")

class TodoController {

    static create(req, res) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
        .then(todo => {
            // console.log("entering create");
            // console.log(todo);
            res.status(201).json(todo)
        })
        .catch(err => {
            res.status(500).json({err:err, message: "SERVER ERROR"})
        })
    }

    static findAll(req, res) {
        Todo.findAll()
            .then(todos => {
                // console.log(`Todos are:`);
                // console.log(todos);
                res.status(200).json({todos:todos, message: "Here are the complete list"})
            })
            .catch(err => {
                res.status(500).json({err:err, message: "SERVER ERROR"})
            })

    }

    static findById(req, res) {
        Todo.findOne({
            where: {
                id: +req.params.id
            }
        })
        .then(todo => {
            // console.log(`recovered todo is`);
            // console.log(todo);
            if(todo) {
                res.status(200).json({todo:todo, message: "Entry found"})
            } else {
                throw new Error()
            }
        })
        .catch(err => {
            // console.log(err);
            res.status(500).json({err:err, message: "ENTRY NOT FOUND"})
        })
    }

    static update(req, res) {
        Todo.update({
            title: req.body.id,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: +req.params.id
            }
        })
        .then(updated => {
            res.status(200).json({todo:updated, message: "Entry updated"})
        })
        .catch(err => {
            res.status(500).json({err:err, message: "UPDATE FAILED"})
        })
    }

    static delete(req, res) {
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(deleted => {
            res.status(200).json({todo:deleted, message: "Delete Success"})
        })
        .catch(err => {
            res.status(500).json({err:err, message: "DELETE FAILED"})
        })
    }

}

module.exports = TodoController