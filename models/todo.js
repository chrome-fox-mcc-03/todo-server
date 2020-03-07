'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate(models) {
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'title cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'title cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'description cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'description cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        msg: 'status cannot be empty'
      },
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'due date cannot be empty'
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    GroupId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    validate: {
      checkDueDate(next) {
        if (new Date(this.due_date) < new Date()) {
          next({
            status: 400,
            message: 'due date cannot passed than today'
          })
        } else {
          next()
        }
      }
    }
  })
  return Todo;
};