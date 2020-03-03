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
            //error throws during creation and update process
            throw new Error('Due date cannot be yesterday!')
          }
        }
      },
    },
    UserId: DataTypes.INTEGER
  },{
    hooks:{
      beforeCreate: (todo) => {
        //setting up default value for the description and status field
        if(!todo.description){
          todo.description = 'Todo description'
        }
        if(!todo.status){
          todo.status = false
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
    Todo.belongsTo(models.User)
  };
  return Todo;
};