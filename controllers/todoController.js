const {Todo} = require('../models')
class TodoController {
    static create(req,res) {
        let {title,description,status,due_date} = req.body
        Todo.create({
            title,
            description,
            status,
            due_date
        })
        .then((result) => {
            res.status(201).json({result})
        }).catch((err) => {
            res.status(400).json(err)
        });
    }

    static findAll(req,res) {
        Todo.findAll()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json({err,message:'Internal Server Error'})
        });
    }

    static findById(req,res) {
        Todo.findByPk(req.params.id)
        .then((result) => {
            res.status(200).json({result})     
        }).catch((err) => {
            res.status(404).json({message:'Error not found'})
        });
    }

    static updateById(req,res) {
        let {id} = req.params
        let {title,description,status,due_date} = req.body
        Todo.update({
            title,description,status,due_date
        },{where:{id}})
        .then((data) => {
            return Todo.findAll({
                where:{id}
            })
        })
        .then((result) => {
            res.status(200).json({result,message:'Success Update!'})    
        }).catch((err) => {
            res.status(400).json({err,message:'Validation Errors'})
        });
    }

    static deleteById(req,res) {
        let {id} = req.params
        let data = null
        Todo.findAll({
            where:{id}
        })
        .then((result) => {
            data = result
            return Todo.destroy({where:{id}})
        })
        .then((result) => {
            res.status(200).json({data,message:'Success Delete'})
        })
        .catch((err) => {
            res.status(404).json({err,message:"Error Not Found"})
        })
    }
}

module.exports = TodoController