'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.User)
      Todo.belongsTo(models.Group)
    }
  }
  
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Todo title cannot be empty'
        },
        notEmpty: {
          msg: 'Todo title cannot be empty'
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: `${new Date().toLocaleDateString()}`,
          msg: 'Cannot set due date in the past'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {sequelize});

  return Todo;
};