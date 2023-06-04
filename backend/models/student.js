'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Class);
      Student.belongsTo(models.User);
    }
  }
  Student.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    gender: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    parentPhone: DataTypes.STRING,
    address: DataTypes.STRING,
    idSiswa: DataTypes.STRING,
    tahunMasuk: DataTypes.STRING,
    tahunLulus: DataTypes.STRING,
    classLevel: DataTypes.STRING,
    ClassId: {
      type:DataTypes.INTEGER,
      references:{
        model:'Classes',
        key:'id'
      }
    },
    UserId:{
      type:DataTypes.STRING,
      references:{
        model:'Users',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};