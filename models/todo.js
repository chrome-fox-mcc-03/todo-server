'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Todo extends Model {
    static associate(models){
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title shouldn't be empty!"
        },
        notEmpty: {
          msg: "Title shouldn't be empty!"
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "This fill shouldn't be empty"
        },
        notEmpty: {
          msg: "This fill shouldn't be empty"
        },
        checkDate(value) {
          if(value < new Date()) {
            throw new Error("This date is invalid")
          }
        }
      }
    },
    UserId: DataTypes.INTEGER
  },
  {
    sequelize
  })
  return Todo;
};