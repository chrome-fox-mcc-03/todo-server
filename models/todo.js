'use strict';
module.exports = (sequelize, DataTypes) => {
	class Todo extends sequelize.Sequelize.Model {
		static associate (models) {
			
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
		description: DataTypes.STRING,
		status: DataTypes.BOOLEAN,
		due_date: DataTypes.DATE
	}, { sequelize });

	return Todo;
};