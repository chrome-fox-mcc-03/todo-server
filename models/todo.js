'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 100]
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        dueDateIsYesterday(value){
          let dueDate = new Date(value).toLocaleDateString()
          let nowDate = new Date().toLocaleDateString()
          if(dueDate < nowDate){
            throw new Error('Due date cannot be yesterday!')
          }
        }
      },
    }
  },{
    hooks:{
      beforeCreate: (todo) => {
        if(!todo.description){
          todo.description = todo.title
        }
      },
      beforeDestroy: (todo) => {
        if(!todo.id){
          throw new Error(`Data couldn't found`)
        }
      },
      beforeUpdate: (todo) => {
        if(!todo.id){
          throw new Error(`Data couldn't found`)
        }
      }
    }, 
    sequelize
  })
  
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};