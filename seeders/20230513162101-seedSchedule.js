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

    const data = [
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      },
      {
        senin: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        selasa: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        rabu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        kamis: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        jumat: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        sabtu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
        minggu: `[
          "KIMIA - 07.00 - 09.00",
          "BIOLOGI - 09.00-12.00",
        ]`,
      }
    ]

    const insert = data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Schedules', insert, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Schedules', null, {});
  }
};
