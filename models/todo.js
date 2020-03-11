'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title must be filled"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description must be filled"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Status must be filled"
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: "Date must be filled"
        },
        isBeforeNow(date) { 
          if(date) {
            if (date.toLocaleDateString() <= new Date().toLocaleDateString()) {
              throw new Error('due date at least is tomorrow.');
            }
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