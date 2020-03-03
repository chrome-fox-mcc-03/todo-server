'use strict';
module.exports = (sequelize, DataTypes) => {
  class todo extends sequelize.Sequelize.Model {}
  todo.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg : "title must be filled"
        }      
      }
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg : "description must be filled"
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
        notEmpty: {
          args: true,
          msg : "description must be filled"
        },
        isDate: {
          args: true,
          msg : "input must be date type"
        }, 
        isGreaterThanOtherField(value) {
          let insertedDate =  new Date(value)
          let currentDate = new Date()
          if (insertedDate < currentDate) {
            throw new Error('Date must be greater than today');
          }
        }  
      }
    },
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (activity, options) => {
        if (!activity.status) {
          activity.status = false
        }
      }
    },
    sequelize,
    modelName: "todo"
  })
  todo.associate = function(models) {
    // associations can be defined here
    todo.belongsTo(models.user)
  };
  return todo;
};