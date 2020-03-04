'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isBeforeNow(date) {
          if (date.toLocaleDateString() < new Date().toLocaleDateString()) {
            throw new Error('due date at least is today.');
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Todo'
  })
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};