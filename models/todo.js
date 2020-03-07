'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {
    static associate (models){
      Todo.belongsTo(models.User)
    }
  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title must not null'
        },
        len: {
          args: [3],
          msg: 'Title must at least 5 character'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Descriptions must not null'
        },
        len: {
          args: [5],
          msg: 'Descriptions must at least 5 character'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Due_date must not null'
        },
        isAfter: {
          args: new Date().toDateString(),
          msg: 'Date must after now date'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCreate: (Todo, options) => {
        Todo.status = false
      }
    },
    sequelize
  })
  return Todo;
};