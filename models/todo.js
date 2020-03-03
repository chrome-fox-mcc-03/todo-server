'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}

  Todo.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      validate: {
        setDefaultFalse(status) {
          if (status != true) {
            status = false
          }
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: {
          args: `${new Date().toLocaleDateString()}`,
          msg: 'Date should be greater than today'
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'Todo'
  })

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};