const {Todo} = require('../models/index')
class Controller {
    static add(req, res) {
        let { title, description,status,due_date } = req.body
        Todo.create({
                title: title,
                description: description,
                status: status,
                due_date: due_date,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch(() => {
                res.status(500)
            })
    }

    static get(req, res){
        Todo.findAll()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(()=>{
            res.status(500)
        })
    }

    static getId(req, res){
        let id = req.params.id
        Todo.findAll({
            where:{id}
        })
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(()=>{
            res.status(500)
        })
    }

    static put(req, res){
        let id = req.params.id
        let { title, description,status,due_date } = req.body
        Todo.update({
            title: title,
            description: description,
            status: status,
            due_date: due_date
        },{
            where:{id:id},
            returning: true,
            plain: true
        })
        .then((result)=>{
            res.status(200).json(result[1])
        })
    }

    static delete(req, res){
        let id = req.params.id
        let data;
        Todo.findByPk(id)
        .then((result)=>{
            data = result
            return Todo.destroy({
                where: {
                    id: id
                }
            })
        })
        
        .then((result)=>{
            res.status(200).json(data)
        })
        .catch(()=>{
            res.status(500)
        })
    }

}


module.exports = Controller