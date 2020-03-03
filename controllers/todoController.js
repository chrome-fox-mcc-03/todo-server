const {Todo,User} = require('../models')
const {signToken,checkPassword} = require('../helpers/index')

class TodoController {
    static create(req,res,next) {
        let {title,description,status,due_date} = req.body
        let {UserId} = req.headers
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
            res.status(400).json({err})
        });
    }

    static findAll(req,res) {
        Todo.findAll()
        .then((result) => {
            res.status(200).json({result})
        })
        .catch((err) => {
            res.status(500).json({err,message:'Internal Server Error'})
        });
    }

    static findById(req,res) {
        Todo.findByPk(req.params.id)
        .then((result) => {
            if(result == null) {
                throw new Error()
            }
            res.status(200).json({result})     
        })
        .catch((err) => {
            res.status(404).json({message:'Error Data not found'})
        });
    }

    static updateById(req,res) {
        let {id} = req.params
        let {title,description,status,due_date} = req.body
        console.log(req.params)
        console.log(req.body)
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
            res.status(400).json({err,message:'Validation Errors'})
        });
    }

    static deleteById(req,res) {
        let {id} = req.params
        let data = null
        Todo.findAll({
            where:{
                id
            }
        })
        .then((result) => {
            data = result
            return Todo.destroy({where:{id}})
        })
        .then((result) => {
            if(result == 0) {
                throw new Error
            }
            res.status(200).json({data,message:'Success Delete'})
        })
        .catch((err) => {
            res.status(404).json({message:'Error Data Not Found'})
        })
    }

    static register(req,res) {
        let {email,password} = req.body
        User.create({
            email,
            password
        })
        .then((result) => {
            let {id,email} = result.dataValues
            let newResult = {id,email}
            let token = signToken(newResult)
            req.headers.token = token
            res.status(201).json({newResult,token})
        })
        .catch((err) => {
            res.status(400).json({err})
        });
    }

    static login(req,res) {
        let {email,password} = req.body
        User.findOne({
            where:{
                email
            }
        })
        .then((result) => {
            if(result){
                let check = checkPassword(password,result.dataValues.password)
                if(check){
                    let {id,email} = result.dataValues
                    let newResult = {id,email}
                    let token = signToken(newResult)
                    req.headers.token = token
                    res.status(200).json({token})
                }else{
                    const error = {
                        status: 400,
                        message:'Email / Password Wrong'
                    }
                    throw error 
                }
            }else{
                const error = {
                    status: 400,
                    message:'Email / Password Wrong'
                }
                throw error
            }
        })
        .catch((err) => {
            res.status(err.status).json({error:err.message})
        });
    }
}

module.exports = TodoController