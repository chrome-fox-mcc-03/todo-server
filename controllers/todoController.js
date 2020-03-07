const { Todo } = require('../models');
const { gt } = require('sequelize').Sequelize.Op;

class TodoController {
	static findAll (req, res, next) {
		Todo.findAll({
			where: { UserId: req.decode.id },
			order: [['due_date', 'ASC']]
		})
			.then(data => {
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				next(err);
			})
	}

	static create (req, res, next) {
		Todo.create({
			title: req.body.title,
			description: req.body.description,
			status: req.body.status,
			due_date: req.body.due_date,
			UserId: req.decode.id
		})
			.then(data => {
				res.status(201).json({
					data
				})
			})
			.catch(err => {
				next(err);
			})
	}

	static findById (req, res, next) {
		Todo.findAll({
			where: {
				id: req.params.id,
				UserId: req.decode.id
			}
		})
			.then(data => {
				if (data) {
					if (data.length === 0) {
						next({
							status: 404,
							message: 'Todo not found!'
						});
					} else {
						res.status(200).json({
							data: data[0]
						});
					}
				} else {
					next({
						status: 404,
						message: 'Todo not found!'
					});
				}
			})
			.catch(err => {
				next(err);
			})
	}

	static update (req, res, next) {
		Todo.update({
			title: req.body.title,
			description: req.body.description,
			status: req.body.status,
			due_date: req.body.due_date,
		}, {
			where: { id: parseInt(req.params.id) },
			returning: true
		})
			.then(data => {
				data = data[1][0];
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				next(err);
			})
	}

	static delete (req, res, next) {
		Todo.destroy({
			where: { id: parseInt(req.params.id) }
		})
			.then(result => {
				if (result) {
					res.status(200).json({
						message: `Todo id ${req.params.id} successfully deleted!`
					});
				} else {
					next({
						status: 404,
						message: 'Todo not found!'
					});
				}
			})
			.catch(err => {
				next(err);
			})
	}

	static getDueTodo (req, res, next) {
		Todo.findAll({
			where: { 
				UserId: req.decode.id,
				due_date: {
					[gt]: new Date()
				}
			}
		})
	}
}

module.exports = TodoController