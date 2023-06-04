'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.belongsTo(models.User)
      Teacher.hasOne(models.Class)
    }
  }
  Teacher.init({
    name: DataTypes.STRING,
    idguru: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    department: DataTypes.STRING,
    UserId:{
      type: DataTypes.INTEGER,
      references:{
        model:'Users',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};