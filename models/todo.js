'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Todo = sequelize.define('Todo', {
    class Todo extends sequelize.Sequelize.Model {
      // static associate(models) {

      // }

    }
    Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull() {
          if(!this.title) {
            throw new Error("Title must be filled")
          }
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      isEmpty: false,
      validate: {
        beforeToday() {
          if (this.due_date < new Date()) {
            throw new Error("Due date must be today or later")
          }
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeValidate: (todo, options) => {

        if(!todo.description) {
          todo.description = todo.title
        }

        if(!todo.status) {
          todo.status = "pending"
        }
      }
    },
    sequelize,
    modelName: "Todo"
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};