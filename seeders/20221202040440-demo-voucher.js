'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('vouchers', [
      {
        id: 1,
        name: "Diskon Meriah",
        discount: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        paymentId: 1
      },
      {
        id: 2,
        name: "HUT Gelaskaca",
        discount: 4500,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentId: 1
      },
      {
        id: 3,
        name: "HUT NKRI",
        discount: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        paymentId: 2
      },
      {
        id: 4,
        name: "Hari Belanja Nasional",
        discount: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentId: 3
      },
      {
        id: 5,
        name: "Hari Event Sedunia",
        discount: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        paymentId: 4
      },
      {
        id: 6,
        name: "Kocak Event",
        discount: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        paymentId: 9
      },
      {
        id: 7,
        name: "Lost Event",
        discount: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentId: 5
      },
      {
        id: 8,
        name: "taboki",
        discount: 30500,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        paymentId: 7
      },
      {
        id: 9,
        name: "Tarakula",
        discount: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentId: 4
      },
      {
        id: 10,
        name: "Reshwater",
        discount: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        paymentId: 5
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('vouchers', null, {});
  }
};