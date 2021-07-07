const {Todo} = require('../models')

class Controller {
    static findAll(req, res, next){
        Todo.findAll({
            where: {UserId:req.UserId},
            order: [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next())
    }
    static create(req, res, next){
        Todo.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId : req.UserId
        })
        .then(data=> res.status(201).json({data}))
        .catch(err=> {
            next(err)
        })
    }
    static findOne(req, res, next){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data=> {
                if(data) {
                    res.status(200).json({data})
                } else {
                    next({
                        name: 'empty'
                    })
                }
                })
            .catch(err=> next(err))
    }
    static update(req, res, next){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == null) {
                    throw ({name : 'empty'})
                }
                else return Todo.update({
                    title : req.body.title,
                    description : req.body.description,
                    due_date : req.body.due_date
                },{
                    where : {id:req.params.id}
                })
            })
            .then(data=> {
                res.status(200).json({data})
            })
            .catch(err=> {
                next(err)
            })
    }
    static patch(req, res, next){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == null) {
                    throw ({name : 'empty'})
                }
                else return Todo.update({
                    status : true
                },{
                    where : {id:req.params.id}
                })
            })
            .then(data=> {
                res.status(200).json({data})
            })
            .catch(err=> {
                next(err)
            })
    }
    static destroy(req, res, next){
        console.log('ada disini')
        Todo.destroy({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == 0) {
                    next({
                        name: 'empty'
                    })
                }
                else res.status(200).json({message:`Success Delete Data Id = ${req.params.id}`})
            })
            .catch(err=> next(err))
    }
}

module.exports = Controller