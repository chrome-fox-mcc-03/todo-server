const { Todo } = require('../models/index')
const { create } = require('../helpers/google') 
class TodoController {
    static findAll(req,res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static create(req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decode.id
        })
            .then(data => {
                res.status(201).json(data)
                var event = {
                    summary: req.body.title,
                    location: 'MCC HACKTIV8',
                    description: req.body.description,
                    start: {
                      dateTime: new Date(req.body.due_date),
                      timeZone: 'Asia/Jakarta'
                    },
                    end: {
                      dateTime: new Date(req.body.due_date),
                      timeZone: 'Asia/Jakarta'
                    },
                    recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
                    attendees: [{ email: 'lpage@example.com' }, { email: 'sbrin@example.com' }],
                    reminders: {
                      useDefault: false,
                      overrides: [
                        { method: 'email', minutes: 24 * 60 },
                        { method: 'popup', minutes: 10 }
                      ]
                    }
                  }
                  create(event)
            })

            .catch(err => {
                next(err)
            })
    }

    static findByPk(req, res, next) {
        Todo.findByPk(+req.params.id)
            .then(data => {
                if(data) res.status(200).json(data)
                else next({
                    status: 404,
                    message: 'Todo not found'
                })
            })
            .catch(err => res.status(500).json(err))
    }

    static update(req, res, next) {
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
            .then(data => {
                if(data) res.status(200).json(data)
                else next({
                    status: 404,
                    message: 'TODO not found'
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Todo.findByPk(+req.params.id)
            .then(data => {
                if(data) {
                    res.status(200).json({message: `SUCCESS DELETE TODO`})
                } 
                else next({
                    status: 404,
                    message: 'TODO not found'
                })
            })
            .catch(next)
    }
}

module.exports = TodoController