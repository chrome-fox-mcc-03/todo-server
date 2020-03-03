'use strict';
module.exports = (sequelize, DataTypes) => {
  class Group extends sequelize.Sequelize.Model {
    static associate(models) {
      Group.belongsTo(models.GroupUser)
    } 
  }
  Group.init({
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Group name cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          message: 'Group name cannot be empty'
        }
      }
    }
  }, { sequelize })
  return Group;
};