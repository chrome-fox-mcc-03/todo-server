'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models){
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'title cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          message: 'title cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'description cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          message: 'description cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        message: 'status cannot be empty'
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        message: 'due date cannot be empty'
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    GroupId: {
      type: DataTypes.INTEGER
    }
  },{ sequelize })
  return Todo;
};