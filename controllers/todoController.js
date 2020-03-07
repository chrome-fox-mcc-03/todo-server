const { Todo } = require('../models')
const { quotesGenerate } = require('../helpers/bbquotes')
class TodoController{
    static showAllTodo(req, res, next){
        Todo.findAll()
            .then(results => {
                res.status(200).json(
                    results
                )
            })
            .catch(err => {
                // res.status(500).json({err})
                next(err)
            })
    }

    static createTodo(req, res, next){

        Promise.all([
            Todo.create({
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                due_date: req.body.due_date,
                UserId: req.headers.userId
                
            }),
            quotesGenerate()
        ])
        .then(results => {
            console.log(results[0]);
            console.log(results[1].data[0]);
            res.status(201).json({
                data: {
                    'data': results[0],
                    'quotes': results[1].data[0]
                } 
                // bbquote: result[1].data[0]
            })
        })
        // Todo.create({
        //     title: req.body.title,
        //     description: req.body.description,
        //     status: req.body.status,
        //     due_date: req.body.due_date,
        //     UserId: req.headers.userId
            
        // })
        // .then(result => {
        //     console.log(result);
            
        //     res.status(201).json({
        //         data: result,
        //     })
        // }) 
        .catch(err => {
            // let errorMessage = err
            // res.status(500).send(errorMessage)
            next(errorMessage)
        })
    }

    static getTodoById(req, res, next){
        Todo.findByPk(req.params.id)
        .then(result => {
            res.status(200).json({
                data: result
            })
        })
        .catch(err => {
            // res.status(500).json({err})
            next(err)
        })
    }

    static updateTodoById(req, res, next){
        
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        },{
            where: {
                id:req.params.id
            }
        })
        .then(result => {
            return Todo.findByPk(req.params.id)
        })
        .then(result => {
            if(result === null){
                throw new Error(`Data couldn't found`)
            }else{
                res.status(200).json({
                    data: result
                })
            }
        })
        .catch(err => {
            // res.status(500).json({err})
            next(err)
        })
    }

    static deleteTodoById(req, res, next){
        
        Todo.findByPk(req.params.id)
            .then(result => {
                let deletedRecord = result

                Todo.destroy({
                    where:{
                        id : req.params.id
                    }
                })

                return deletedRecord
            })
            .then(deletedData => {
                if(deletedData === null){
                    throw new Error('data could not found!')
                }else{
                    res.status(200).json({
                        data: deletedData
                    })
                }
            })
            .catch(err => {
                // res.status(500).json({err})
                next(err)
            })
    }

    static fetchDataByUserId(req, res, next){
        
        Todo.findAll({
            where: {
                UserId: req.headers.userId 
            }
        })
        .then(results => {
            res.status(200).json({
                data: results
            })
        })
        .catch(err => {
            // res.status(500).json({err})
            next(err)
        })
    }
}


module.exports = TodoController