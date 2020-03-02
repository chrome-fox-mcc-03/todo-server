'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {}
  }

  Todo.init({
    title: {
      type: DataTypes.STRING
    },
    description: { 
      type: DataTypes.STRING 
    },
    status: { 
      type: DataTypes.BOOLEAN 
    },
    due_date: { 
      type: DataTypes.DATE 
    }
  }, {
    sequelize, 
    modelName = 'Todo'
  });

  return Todo;
};
