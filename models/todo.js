'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty(title) {
          if (!title) {
            throw new Error('title cannot be empty')
          }
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};