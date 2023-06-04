'use strict';

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
    const data= [
      {
        name:'Fahmi Maulana',
        idguru:'934912932',
        gender:'Pria',
        address:'JLN KEMUNING SUMENEP',
        phone:'081235378292',
        jobtitle:'biologi',
        department:'guru',
        UserId:1
      },
      {
        name:'Fahmi Maulana',
        idguru:'934912932',
        gender:'Pria',
        address:'JLN KEMUNING SUMENEP',
        phone:'081235378292',
        jobtitle:'biologi',
        department:'guru',
        UserId:2
      },
      {
        name:'Dhea ayu Novianti',
        idguru:'934912932',
        gender:'Perempuan',
        address:'JLN KEMUNING SUMENEP',
        phone:'081235378292',
        jobtitle:'Matematika',
        department:'guru',
        UserId:3
      },
      {
        name:'Farhat Reza Primadi',
        idguru:'934912932',
        gender:'Pria',
        address:'JLN KEMUNING SUMENEP',
        phone:'081235378292',
        jobtitle:'Kimia',
        department:'guru',
        UserId:4
      },
      {
        name:'Nabil Librian Pratama',
        idguru:'934912932',
        gender:'Pria',
        address:'JLN KEMUNING SUMENEP',
        phone:'08123538292',
        jobtitle:'Fisika',
        department:'guru',
        UserId:5
      }
    ]

    const insert= data.map(el=>{
      el.createdAt= new Date()
      el.updatedAt= new Date()
      return el
    })
    await queryInterface.bulkInsert('Teachers',insert,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Teachers', null, {});
  }
};
