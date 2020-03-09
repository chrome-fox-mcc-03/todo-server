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
          if (date.toDateString() <= new Date().toDateString()) {
            throw new Error('due date at least is tomorrow.');
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    countdown: {
      type: DataTypes.STRING
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