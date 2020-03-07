const { compare } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');

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

		console.log(email, password);
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
							token,
							name: result.name
						});
					} else {
						next({
							status: 400,
							message: ['Email/Password combination not found']
						});
					}
				} else {
					next({
						status: 400,
						message: ['Email/Password combination not found']
					});
				}
			})
			.catch(err => {
				next(err);
			});
	}

	static googleSignIn (req, res, next) {
		const clientId = process.env.CLIENT_ID;
		const token = req.headers.token;

		const client = new OAuth2Client(clientId);

		let email = '';
		let name = '';
		let isNewUser = false;

		client.verifyIdToken({
			idToken: token,
			audience: clientId,
		})
			.then((result) => {
				email = result.payload.email;
				name = result.payload.name;

				return User.findOne({
					where: { email }
				})
			})
			.then((result) => {
				if (result) { // if email is exist
					return result;
				} else { // if email does not exist
					isNewUser = true
					return User.create({
						email,
						password: 'qwe123',
						name
					});
				}
			})
			.then((result) => {
				let responseStatus = (isNewUser) ? 201 : 200;
				if (result) {
					let payload = {
						id: result.id,
						email: result.email
					}
					
					let token = sign(payload);
	
					res.status(responseStatus).json({
						token,
						name
					});
				}
			})
			.catch((err) => {
				next(err)
			});
	}
}

module.exports = UserController