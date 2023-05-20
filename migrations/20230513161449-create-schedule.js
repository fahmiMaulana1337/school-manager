'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senin: {
        type: Sequelize.STRING
      },
      selasa: {
        type: Sequelize.STRING
      },
      rabu: {
        type: Sequelize.STRING
      },
      kamis: {
        type: Sequelize.STRING
      },
      jumat: {
        type: Sequelize.STRING
      },
      sabtu: {
        type: Sequelize.STRING
      },
      minggu: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Schedules');
  }
};