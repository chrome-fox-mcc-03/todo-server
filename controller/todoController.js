const { Todo } = require('../models');

class TodoController {
	static findAll (req, res) {
		Todo.findAll()
			.then(data => {
				res.status(200).json({
					data
				})
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}

	static create (req, res) {
		Todo.create({
			title: req.body.title,
			description: req.body.description,
			status: req.body.status,
			due_date: req.body.due_date
		})
			.then(data => {
				res.status(201).json({
					data
				})
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}

	static findById (req, res) {
		Todo.findByPk(req.params.id)
			.then(data => {
				console.log(data);
				if (data !== null) {
					res.status(200).json({
						data
					});
				} else {
					res.status(200).json({
						message: 'Todo not found!'
					});
				}
			})
			.catch(err => {
				res.status(500).json({
					err: new Error(err)
				});
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
				res.status(500).json(err)
			})
	}

	static delete (req, res) {
		Todo.destroy({
			where: { id: parseInt(req.params.id) }
		})
			.then(data => {
				res.status(200).json({
					message: `Todo id ${req.params.id} successfully deleted!`
				})
			})
			.catch(err => {
				res.status(500).json(err)
			})
	}
}

module.exports = TodoController