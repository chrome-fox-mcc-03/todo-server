const {Todo, User} = require('../models')
const encrypt = require('../helper/bcrypt')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')
class Controller {
    static add(req, res, next) {
        Todo.create(req.body)
            .then(function(result) {

                res.status(201).json(result)
            })
            .catch(function(err) {
                next(err)
            })
    }

    static findAll(req, res, next) {
        Todo.findAll({
            // where:{
                // UserId: accesstoken header id(karena res ngga kebawa)
            // }
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
                res.status(400).json({
                    error: "404 not found"
                })
            })

    }

    static update(req, res, next) {
        Todo.update({
            Title: req.body.Title,
            Description: req.body.Description,
            Status: req.body.Status,
            Due_Date: req.body.Due_Date
        }, {
            where: {
                id: req.params.id
            },
            returning:true
        })
            .then(function(result) {
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
                res.status(200).json(data)
            })
            .catch(function(err) {
                console.log('dihapus')
                next(err)
                // res.status(404).json({
                //     error: "Error Not Found"
                // })
            })

    }

    
}

module.exports = Controller
