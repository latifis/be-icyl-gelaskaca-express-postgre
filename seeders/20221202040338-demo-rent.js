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
    return queryInterface.bulkInsert('rents', [
      {
        id: 1,
        address: "Tawakal Street no. 7, Jakarta",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cartId: 2,
        paymentId: 1
      },
      {
        id: 2,
        address: "Berjumpa Street no. 7, Jakarta",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cartId: 3,
        paymentId: 2
      },
      {
        id: 3,
        address: "Supratman Street no. 45, Jakarta",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cartId: 4,
        paymentId: 3
      },
      {
        id: 4,
        address: "Ikhtiar Street no. 117, Wonosobo",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cartId: 4,
        paymentId: 2
      },
      {
        id: 5,
        address: "Perum Street no. 7, Tegal",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cartId: 1,
        paymentId: 5
      },
      {
        id: 6,
        address: "Rohw Street no. 123, Jambi",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cartId: 4,
        paymentId: 1
      },
      {
        id: 7,
        address: "Fourten Street no. 9903, Malang",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cartId: 1,
        paymentId: 2
      },
      {
        id: 8,
        address: "Badungan Street no. 47, Medan",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cartId: 2,
        paymentId: 1
      },
      {
        id: 9,
        address: "Jakal Street no. 90, Bandung",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cartId: 2,
        paymentId: 1
      },
      {
        id: 10,
        address: "Polinar Street no. 17, Jakarta",
        rent_start: new Date(),
        rent_end: new Date(),
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cartId: 2,
        paymentId: 1
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
    return queryInterface.bulkDelete('rents', null, {});
  }
};