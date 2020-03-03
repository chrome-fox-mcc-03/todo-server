'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description.'
    },
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: String(new Date()),
          msg: 'Due date must be in the future.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo'
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Todo;
};