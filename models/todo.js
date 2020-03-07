'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Todo extends Model {
    static associate (models) {
      Todo.belongsTo(models.Status)
      Todo.belongsTo(models.User)
    }
  }

  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Title is required'
        },
        notEmpty: {
          args: true,
          msg : 'Title is required'
        }
      }
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'description is required'
        },
        notEmpty: {
          args: true,
          msg : 'description is required'
        }
      }
    }, 
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'duedate is required'
        },
        notEmpty: {
          args: true,
          msg : 'duedate is required'
        },
        isAfter: {
          args : `${new Date().toLocaleDateString()}`,
          msg : 'you cannot created data with date that less than current date'
        }
      }
    }, 
    StatusId:  DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return Todo;
};