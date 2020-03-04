'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {
      Todo.belongsTo(models.User);
    }
  }

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.BOOLEAN
      },
      due_date: {
        type: DataTypes.DATE
      },
      UserId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Todo'
    }
  );

  return Todo;
};
