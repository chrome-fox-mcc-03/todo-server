'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Todo extends Model { }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title can't be empty`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Description can't be empty`
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        wrongDate(value) {
          if (new Date(value) < Date.now()) {
            throw new Error('You entered wrong date!');
          }
        }
      }
    }
  }, { sequelize })

  Todo.associate = function (models) {
    // associations can be defined here
  };
  return Todo;
};