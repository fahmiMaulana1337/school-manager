'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsTo(models.Teacher);
      Class.belongsTo(models.Schedule);
    }
  }
  Class.init({
    name: DataTypes.STRING,
    isActive: DataTypes.STRING,
    TeacherId:{
      type:' DataTypes.INTEGER',
      references:{
        model:'Teachers',
        key:'id'
      }
    },
    ScheduleId:{
      type:' DataTypes.INTEGER',
      references:{
        model:'Schedules',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};