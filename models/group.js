'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Group extends Model {
    static associate(models) {
      Group.hasMany(models.Todo)
      Group.belongsToMany(models.User, {
        through: models.Member
      })
    }
  }
  
  Group.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Group name cannot be empty'
        },
        notEmpty: {
          msg: 'Group name cannot be empty'
        }
      }
    },
  }, {sequelize});

  return Group;
};