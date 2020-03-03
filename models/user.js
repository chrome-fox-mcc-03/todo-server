'use strict';
const { encode } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
	class User extends sequelize.Sequelize.Model {}
	
	User.init({
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
					msg: 'Email is required'
				},
				isEmail: {
					args: true,
					msg: 'Email input not valid'
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
					msg: 'Password is required'
				},
				len: {
					args: [6],
					msg: 'Password minimum length is 6 characters'
				},
				isAlphanumeric: {
					args: true,
					msg: 'Password must be in alphanumeric'
				},
			}
		},
		name: DataTypes.STRING
	}, {
		sequelize,
		hooks: {
			beforeCreate: (user, opt) => {
				user.password = encode(user.password);
			}
		}
	});

	User.associate = function(models) {
		// associations can be defined here
		User.hasMany(models.Todo);
	};
	return User;
};