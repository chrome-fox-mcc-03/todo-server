'use strict';
module.exports = (sequelize, DataTypes) => {

  class Todo extends sequelize.Sequelize.Model {}

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title cannot be empty!'
        },
        notNull: {
          msg: 'Title cannot be empty!'
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toDateString(),
          msg: "Cannot backdate, check your input date!"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    sequelize
  })
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  }

  return Todo;
};