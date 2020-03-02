'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {

    }
  }
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE

  }, { validate:{
    dueDateCheck(){
      let now = new Date()
      if (this.due_date < now) throw new Error('Due Date must be greater than now')
    }
  },
    sequelize,
    modelName: 'Todo'
  })
  return Todo;
};