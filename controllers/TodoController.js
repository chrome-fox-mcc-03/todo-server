const {Todo} = require("../models")
const { CustomError } = require("../helpers/errorModel.js")

class TodoController {

    static create(req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.body.UserId
        })
        .then(todo => {
            // console.log("entering create");
            // console.log(todo);
            res.status(201).json(todo)
        })
        .catch(err => {
            // res.status(500).json({error:err})
            next(err)
        })
    }

    static findAll(req, res, next) {
        // console.log(`req decoded is`);
        // console.log(req.decoded);
        
        Todo.findAll()
            .then(todos => {
                // console.log(`Todos are:`);
                // console.log(todos);
                
                res.status(200).json({todos:todos, message: "Here are the complete list", decoded:req.decoded})
            })
            .catch(err => {
                // res.status(500).json({error:err})
                next(err)
            })

    }

    static findById(req, res, next) {
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
                // res.status(404).json({error: "Entry Not Found"})
                throw new CustomError(400, "Entry not found")
            }
        })
        .catch(err => {
            // console.log(err);
            // res.status(500).json({error:err})
            next(err)
        })
    }

    static update(req, res, next) {
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
                // res.status(404).json({error: "Entry Not Found"})
                throw new CustomError(400, "Entry not found")
            } else {
                res.status(200).json({todo:updated[1], message: "Entry updated"})
            }
        })
        .catch(err => {
            // if(err.name === "SequelizeValidationError") {
            //     res.status(400).json({error: err.name, message: err.message})
            // } else {
            //     res.status(500).json({error:err})
            // }
            next(err)
        })
    }

    static delete(req, res, next) {
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(deleted => {
            if(deleted === 1) {
                res.status(200).json({todo:deleted, message: "Delete Success"})
            } else {
                // res.status(404).json({error: "Entry Not Found"})
                throw new CustomError(400, "Entry not found")
            }
            
        })
        .catch(err => {
            // res.status(500).json({error:err})
            next(err)
        })
    }

}

module.exports = TodoController