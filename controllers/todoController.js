const { Todo } = require('../models');

class TodoController {
	static findAll (req, res) {
		Todo.findAll({
			where: { UserId: req.decode.id }
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
							data
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

	static update (req, res) {
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
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				next(err);
			})
	}

	static delete (req, res) {
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
}

module.exports = TodoController