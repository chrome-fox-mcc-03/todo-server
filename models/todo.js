'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
    Todo.init({
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            if(value === null ){
              throw new Error("DO NOT LEAVE IT AT BLANK")
            }
          }
        }
      },
      Description: DataTypes.STRING,
      Status: DataTypes.BOOLEAN,
      Due_Date: {
        type: DataTypes.DATE,
        validate: {
          customValidator(value) {
            if(value < Date.now()) {
              throw new Error("Due Date Cannot Less Than Today")
            }
          }
        }
      }
    }, { sequelize, modelName: 'Todo' });

  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
    // associations can be defined here
  };
  return Todo;
};

