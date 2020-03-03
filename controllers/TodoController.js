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
            res.status(500).json({error:err})
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
                res.status(500).json({error:err})
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
                res.status(404).json({error: "Entry Not Found"})
            }
        })
        .catch(err => {
            // console.log(err);
            res.status(500).json({error:err})
        })
    }

    static update(req, res) {
        // console.log(`updating`);
        // console.log(req.params.id);
        Todo.update(
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                due_date: req.body.due_date
            }, {
                where: {
                    id: +req.params.id
                },
                returning: true
            }
        )
        .then(updated => {
            console.log(`this is updated data`);
            console.log(updated);
            if(updated[0] === 0) {
                res.status(404).json({error: "Entry Not Found"})
            } else {
                res.status(200).json({todo:updated[1], message: "Entry updated"})
            }
        })
        .catch(err => {
            if(err.name === "SequelizeValidationError") {
                res.status(400).json({error: err.name, message: err.message})
            } else {
                res.status(500).json({error:err})
            }
            
        })
    }

    static delete(req, res) {
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(deleted => {
            if(deleted === 1) {
                res.status(200).json({todo:deleted, message: "Delete Success"})
            } else {
                res.status(404).json({error: "Entry Not Found"})
            }
            
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
    }

}

module.exports = TodoController