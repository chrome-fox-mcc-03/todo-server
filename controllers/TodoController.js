const {Todo} = require("../models")
let id
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
                throw ("Index not Found")
            }
        })
        .catch(err => {
            // console.log(err);
            res.status(500).json({error:err})
        })
    }

    static update(req, res) {
        // console.log(req.body);
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
        .then(updated => {
            if(updated[1].length !== 0) {
                // console.log(`updating`)
                // console.log(updated);
                // console.log(`the previous value`);
                // console.log(updated._previousDataValues);
                res.status(200).json({todo:updated[1], message: "Entry updated"})
            } else {
                throw("Index not found")
            }
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
    }

    static delete(req, res) {
        id = +req.params.id
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(deleted => {
            if(deleted === 1) {
                res.status(200).json({todo:deleted, message: `Delete success for ID ${id}`})
            } else {
                throw("Index not Found")
            }
            
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
    }

}

module.exports = TodoController