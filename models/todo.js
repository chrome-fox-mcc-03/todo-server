'use strict';
module.exports = (sequelize, DataTypes) => {
	class Todo extends sequelize.Sequelize.Model {
		static associate (models) {
			Todo.belongsTo(models.User);
		}
	}
	
	Todo.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notNull: {
				args: false,
				msg: 'Title cannot be empty!'
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			notNull: {
				args: false,
				msg: 'Description cannot be empty!'
			}
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			notNull: {
				args: false,
				msg: 'Status cannot be empty!'
			}
		},
		due_date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notNull: {
					args: false,
					msg: 'Due date cannot be empty!'
				},
				isAfter: {
					args: new Date().toDateString(),
					msg: 'Date must be after current date'
				}
			}
		},
		UserId: {
			type: DataTypes.INTEGER,
			// allowNull: false
		}
	}, { sequelize });

	return Todo;
};