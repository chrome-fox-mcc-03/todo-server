'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model { }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter title'
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter status'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter due_date'
        },
        customValidator(value) {
          let now = new Date();
          let date = new Date(value);
          if (!value || date == "invalid date" || date < now) {
            throw new Error("due_date must be greater than now!");
          }
        }
      }
    }
  }, {
    hooks: {
      beforeValidate: (data, options) => {
        if (!data.status) {
          data.status = "pending";
        }
      }
    },
    sequelize,
    modelName: 'Todo'
  });

  Todo.associate = function (models) {
    // associations can be defined here
  };
  return Todo;
};