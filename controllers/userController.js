const { compare } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
	static create (req, res, next) {
		User.create({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name
		})
			.then(result => {
				let payload = {
					id: result.id,
					email: result.email
				}
				
				let token = sign(payload);

				res.status(200).json({
					token
				});
			})
			.catch(err => {
				next(err);
			})
	}

	static signIn (req, res, next) {
		let { email, password } = req.body
		User.findOne({
			where: {
				email
			}
		})
			.then(result => {
				if (result) {
					if (compare(password, result.password)) {
						let payload = {
							id: result.id,
							email: result.email
						}
						
						let token = sign(payload);

						res.status(200).json({
							token
						});
					} else {
						next({
							status: 400,
							message: 'Email/Password combination not found'
						});
					}
				} else {
					next({
						status: 400,
						message: 'Email/Password combination not found'
					});
				}
			})
			.catch(err => {
				next(err);
			});
	}
}

module.exports = UserController