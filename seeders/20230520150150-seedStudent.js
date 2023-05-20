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
    let data =[
      {
        name:'Aqila',
        image:'https://png.pngtree.com/png-clipart/20220720/ourlarge/pngtree-baju-sekolah-dasar-png-image_6014652.png',
        gender:'Perempuan',
        phoneNumber:'08123495832',
        parentPhone:'08234732432',
        address:'Alana Regency',
        idSiswa:'234732',
        tahunMasuk:'2021',
        tahunLulus:'BELUM LULUS',
        classLevel:'1',
        ClassId:'1',
        UserId:6,
      },
      {
        name:'Quinn',
        image:'https://png.pngtree.com/png-clipart/20220720/ourlarge/pngtree-baju-sekolah-dasar-png-image_6014652.png',
        gender:'Perempuan',
        phoneNumber:'08123495832',
        parentPhone:'08234732432',
        address:'Alana Regency',
        idSiswa:'234732',
        tahunMasuk:'2021',
        tahunLulus:'BELUM LULUS',
        classLevel:'1',
        ClassId:'1',
        UserId:7,
      },
      {
        name:'Khamzat',
        image:'https://png.pngtree.com/png-clipart/20220720/ourlarge/pngtree-baju-sekolah-dasar-png-image_6014652.png',
        gender:'Pria',
        phoneNumber:'08123495832',
        parentPhone:'08234732432',
        address:'Alana Regency',
        idSiswa:'234732',
        tahunMasuk:'2021',
        tahunLulus:'BELUM LULUS',
        classLevel:'1',
        ClassId:'1',
        UserId:8,
      },
    ]
    const insert= data.map(el=>{
      el.createdAt= new Date()
      el.updatedAt= new Date()
      return el
    })
    await queryInterface.bulkInsert('Students',insert,{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Students', null, {});

  }
};
