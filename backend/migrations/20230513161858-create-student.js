'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      parentPhone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      idSiswa: {
        type: Sequelize.STRING
      },
      tahunMasuk: {
        type: Sequelize.STRING
      },
      tahunLulus: {
        type: Sequelize.STRING
      },
      classLevel: {
        type: Sequelize.STRING
      },
      ClassId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Classes',
          key:'id'
        }
      },
      UserId:{
        type:Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};