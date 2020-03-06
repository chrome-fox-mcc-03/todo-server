const {Todo, User} = require('../models')
const encrypt = require('../helper/bcrypt')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')
class Controller {
    static add(req, res, next) {
        const {Title, Description, Status, Due_Date, UserId} = req.body
        Todo.create({
            Title,
            Description,
            Status,
            Due_Date,
            UserId: req.id
        })
            .then(function(result) {
                console.log('ahahah')
                console.log(result)
               return Todo.findAll({
                   where: {
                    UserId: req.id
                   },
                   order: [['id', "ASC"]]
               })
            })
            .then(function(result) {
                console.log(result)
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
    }

    static findAll(req, res, next) {
        Todo.findAll({
            where:{
                UserId: req.id
            },
            order: [['id', "ASC"]]
        })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                console.log(err)
                res.status(500).json(err.message)
            })
    }

    static findI(req, res, next) {
        Todo.findByPk(req.params.id ,{
            returning:true
        })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })

    }

    static update(req, res, next) {
        console.log(req.body)
        console.log('update')
        const { Title, Description, Status, Due_Date } = req.body
        Todo.update({
            Title,
            Description,
            Status,
            Due_Date
        }, {
            where: {
                id: req.params.id
            },
            returning:true
        })
            .then(function(result) {
                return Todo.findAll({
                    where: {
                        UserId: req.id
                    },
                    order: [['id', "ASC"]]
                })
            })
            .then(function(result2) {
                let result = result2
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
    }

    static delete(req, res, next) {
        let data;
        Todo.findByPk(req.params.id)
            .then(function(result) {
                data = result
                return result.destroy()
            })
            .then(function(result1) {
                return Todo.findAll({
                    where:{
                        UserId: req.id
                    },
                    order: [['id', "ASC"]]
                })
            })
            .then(function(result2) {
                let result = result2
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
                
            })

    }

    
}

module.exports = Controller
