const {Todo, User} = require("../models")
const CustomError = require("../helpers/errorModel.js")
const restdb = require("../helpers/thirdParty.js")

class TodoController {

    static create(req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        })
        .then(todo => {
            console.log("entering create");
            console.log(todo);

            res.status(201).json(todo)

            console.log(`status sent! what about the restdb post?`);

            /*
            SEND TO EMAIL USING RESTDB 
             */
            restdb.post("/mail", {
                "to": req.decoded.email,
                "subject": "You just added a to-do!",
                "html": 
                `<h2>NEW TO-DO:</h2> <br>
                 <h3>Title: ${req.body.title}</h3><br>
                 <h3>Description: ${req.body.description}</h3><br>
                 <h3>Status: ${req.body.email}</h3><br>
                 <h3>Due Date: ${req.body.due_date}</h3><br>`,
                 "company": "fancyToDoServer",
                 "sendername": "Admin"
            })
            
            console.log(`restdb POST SUCCESS`);
            
        })
        .catch(err => {
            // res.status(500).json({error:err})
            next(err)
        })
    }

    static findAll(req, res, next) {
        console.log(`req decoded is`);
        console.log(req.decoded);
        console.log(`the ID of decoded is ${req.decoded.id}`);
        console.log(`payload is`);
        console.log(req.decoded);
        
        Todo.findAll({
            include: [{
                model: User,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password']
                }
            }],
            where: {
                UserId: req.decoded.id
            }
        })
            .then(todos => {
                // console.log(`Todos are:`);
                // console.log(todos);
                
                res.status(200).json({todos:todos, message: "Here are the complete list", decoded:req.decoded})
            })
            .catch(err => {
                // res.status(500).json({error:err})
                console.log(`error reading all here`);
                // console.log(err);
                next(err)
            })

    }

    static findById(req, res, next) {
        console.log(`req decoded is`);
        console.log(req.decoded);
        // console.log(`payload is`);
        // console.log(req.payload);
        Todo.findByPk(+req.params.id)
        .then(todo => {
            console.log(`recovered todo is`);
            console.log(todo);
            if(todo) {
                res.status(200).json({todo:todo, message: "Entry found", decoded:req.decoded})
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
        console.log(`updating`);
        console.log(req.params.id);
        console.log(`checking which user`);
        console.log(req.decoded);
        // console.log(`which payload again?`);
        // console.log(req.payload);
        Todo.update(
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                due_date: req.body.due_date,
                UserId: req.decoded.id
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

                console.log(`SEND UPDATE STATUS`);
                res.status(200).json({todo:updated[1], message: "Entry updated"})

                console.log(`entering restdb update`);

                restdb.post("/mail", {
                    "to": req.decoded.email,
                    "subject": "You just added a to-do!",
                    "html": 
                    `<h2>UPDATED TO-DO:</h2> <br>
                     <h3>Title: ${req.body.title}</h3><br>
                     <h3>Description: ${req.body.description}</h3><br>
                     <h3>Status: ${req.body.email}</h3><br>
                     <h3>Due Date: ${req.body.due_date}</h3><br>`,
                     "company": "fancyToDoServer",
                     "sendername": "Admin"
                })
                
                console.log(`RESTDB UPDATE SUCCESS`);
                
            }
        })
        .catch(err => {
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
                throw new CustomError(400, "Entry not found")
            }
            
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = TodoController