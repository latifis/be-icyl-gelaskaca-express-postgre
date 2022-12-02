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
    return queryInterface.bulkInsert('paymentProofs', [
      {
        id: 1,
        name: "Dodi",
        date: new Date(),
        bank: "BRI",
        nominals: 20000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        rentId: 21,
        verificationId: 3
      },
      {
        id: 2,
        name: "Ade",
        date: new Date(),
        bank: "BNI",
        nominals: 234500,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 2,
        verificationId: 1
      },
      {
        id: 3,
        name: "Aca",
        date: new Date(),
        bank: "BCA",
        nominals: 213000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 5,
        verificationId: 8
      },
      {
        id: 4,
        name: "Rahmat",
        date: new Date(),
        bank: "BSI",
        nominals: 31500,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 3,
        verificationId: 1
      },
      {
        id: 5,
        name: "Permata",
        date: new Date(),
        bank: "BTN",
        nominals: 345000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 4,
        verificationId: 5
      },
      {
        id: 6,
        name: "Oexsamuel",
        date: new Date(),
        bank: "CIMB Niaga",
        nominals: 12000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 31,
        verificationId: 4
      },
      {
        id: 7,
        name: "Teracanasya",
        date: new Date(),
        bank: "BRI",
        nominals: 23500,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        rentId: 2,
        verificationId: 3
      },
      {
        id: 8,
        name: "Rohman",
        date: new Date(),
        bank: "BNI",
        nominals: 455000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        rentId: 4,
        verificationId: 6
      },
      {
        id: 9,
        name: "Surya",
        date: new Date(),
        bank: "BTN",
        nominals: 450000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        rentId: 6,
        verificationId: 3
      },
      {
        id: 10,
        name: "Dodi",
        date: new Date(),
        bank: "BNI",
        nominals: 230000,
        state: 1,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 4,
        verificationId: 5
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
    return queryInterface.bulkDelete('paymentProofs', null, {});
  }
};