'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty:true,
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty:true,
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      validate: {
        notEmpty:true,
      }  
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        notEmpty:true,
        isYesterday: (values) => {
          let dataDay = values.getDate()
          let dataMonth = values.getMonth() + 1
          let dataYear = values.getFullYear()
          let day = new Date().getDate()
          let month = new Date().getMonth() + 1
          let year = new Date().getFullYear()
          if(dataYear < year) {
            throw new Error('please put time will come')
          }else if(dataYear === year) {
            if(dataMonth < month) {
              throw new Error('please put time will come')
            }
          }else if(dataMonth === month) {
            if(dataDay < day) {
              throw new Error('please put time will come')
            }
          }
        }
      }
    }
  },{
    sequelize
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User,{foreignKey:'UserId'})
  };
  return Todo;
};