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
			validate: {
				notNull: {
					args: true,
					msg: 'Title cannot be empty!'
				},
				notEmpty: {
					args: true,
					msg: 'Please input the title!'
				}
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
					msg: 'Description cannot be empty!'
				}
			}
		},
		status: {
			type: DataTypes.BOOLEAN
		},
		due_date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
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
			allowNull: false
		}
	}, { 
		sequelize,
		hooks: {
			beforeCreate: (todo, opt) => {
				todo.status = false
			}
		}
	 }
	);

	return Todo;
};