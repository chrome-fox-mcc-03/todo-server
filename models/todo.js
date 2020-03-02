'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Todo = sequelize.define('Todo', {
    class Todo extends sequelize.Sequelize.Model {
      static associate(models) {

      }

    }
    Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        beforeToday() {
          if (this.due_date < new Date()) {
            throw new Error("Due date must be today or later")
          }
        }
      }
    }
  }, {
    validate: {
      isNotNull() {
        if(!this.title || !this.description || !this.status || !this.due_date) {
          throw new Error("All entries must be filled")
        } 
      }
    },
    sequelize,
    "modelName": "Todo"
  });
  // Todo.associate = function(models) {
  //   // associations can be defined here
  // };
  return Todo;
};