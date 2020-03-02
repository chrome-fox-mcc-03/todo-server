'use strict';
module.exports = (sequelize, DataTypes) => {
  class todo extends sequelize.Sequelize.Model {}
  todo.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    status: { 
      type: DataTypes.BOOLEAN
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true, 
        isGreaterThanOtherField(value) {
          let insertedDate =  new Date(value)
          let currentDate = new Date()
          if (insertedDate < currentDate) {
            throw new Error('Date must be greater or equal to today');
          }
        }  
      }
    }
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
  };
  return todo;
};