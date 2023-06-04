'use strict';

const { hash } = require('../helpers/helper');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const data = [
      {
        username:'admin',
        password:'12345678',
        role:'admin'
      },
      {
        username:'guru',
        password:'12345678',
        role:'guru'
      },
      {
        username:'guru2',
        password:'12345678',
        role:'guru'
      },
      {
        username:'guru3',
        password:'12345678',
        role:'guru'
      },
      {
        username:'gur4',
        password:'12345678',
        role:'guru'
      },
      {
        username:'aqila',
        password:'12345678',
        role:'student'
      },
      {
        username:'quinn',
        password:'12345678',
        role:'student'
      },
      {
        username:'khamzat',
        password:'12345678',
        role:'student'
      },
    ]

    const insert= data.map(el=>{
      el.password=hash(el.password)
      el.createdAt=new Date()
      el.updatedAt= new Date()
      return el
    })

    await queryInterface.bulkInsert('Users',insert,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
