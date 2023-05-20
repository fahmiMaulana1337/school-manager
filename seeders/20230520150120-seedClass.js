'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        name:'X-IPA 1',
        isActive:true,
        TeacherId:1,
        ScheduleId:1,
      },
      {
        name:'X-IPA 2',
        isActive:true,
        TeacherId:2,
        ScheduleId:2,
      },
      {
        name:'X-IPA 3',
        isActive:true,
        TeacherId:3,
        ScheduleId:3,
      },
      {
        name:'X-IPA 4',
        isActive:true,
        TeacherId:4,
        ScheduleId:4,
      },
      {
        name:'X-IPA 5',
        isActive:true,
        TeacherId:5,
        ScheduleId:5,
      },
    ]
    const insert= data.map(el=>{
      el.createdAt= new Date()
      el.updatedAt= new Date()
      return el
    })
    await queryInterface.bulkInsert('Classes',insert,{})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
