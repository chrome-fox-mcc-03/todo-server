const {Todo,User} = require('../models')
const {decodeToken} = require('../helpers/index')


class TodoController {
    static create(req,res,next) {
        let {title,description,due_date} = req.body
        let {token} = req.headers
        let data = decodeToken(token)
        let UserId = data.id
        let status = null
        if(!status) {
            status = false
        }
        Todo.create({
            title,
            description,
            status,
            due_date,
            UserId
        })
        .then((result) => {
            res.status(201).json({result})
        })
        .catch((err) => {
            next(err)
        });
    }

    static findAll(req,res,next) {
        Todo.findAll({
            include:User
        })
        .then((result) => {
            res.status(200).json({result})
        })
        .catch((err) => {
            next(err)
        });
    }

    static findById(req,res,next) {
        // id user
        Todo.findAll({
            where:{
                UserId:req.params.id
            }
        })
        .then((result) => {
            if(result == null) {
                next({
                    status:404,
                    message:'Data not Found'
                })
            }
            res.status(200).json({result})     
        })
        .catch((err) => {
            next(err)
        });
    }

    static updateById(req,res,next) {
        let {id} = req.params
        let {title,description,status,due_date} = req.body
        Todo.update({
            title,description,status,due_date
        },{where:{
            id
        }})
        .then((data) => {
            return Todo.findAll({
                where:{
                    id
                }
            })
        })
        .then((result) => {
            res.status(200).json({result,message:'Success Update!'})    
        })
        .catch((err) => {
            next(err)
        });
    }

    static deleteById(req,res,next) {
        let {id} = req.params
        let data = null
        Todo.findAll({
            where:{
                id
            }
        })
        .then((result) => {
            if(result.length < 1) {
                next({
                    status:404,
                    message:'Data Not Found'
                })
            }
            data = result
            return Todo.destroy({
                where:{
                    id
                }
            })
        })
        .then((result) => {
            res.status(200).json({data,message:'Success Delete'})
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = TodoController