const { User } = require('../models');

class UserController {
	static create (req, res, next) {
		// res.status(200).json(req.body);
		User.create({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name
		})
			.then(result => {
				res.status(201).json(result);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err.message)
			})
	}
}

module.exports = UserController