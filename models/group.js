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
        msg: 'Group name cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Group name cannot be empty'
        }
      }
    }
  }, { sequelize })
  return Group;
};