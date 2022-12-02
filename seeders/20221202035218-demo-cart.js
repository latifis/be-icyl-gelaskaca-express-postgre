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
    return queryInterface.bulkInsert('carts', [
      {
        id: 1,
        qty: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 2,
        qty: 420,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 3,
        qty: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 4,
        qty: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 5,
        qty: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 6,
        qty: 990,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 7,
        qty: 290,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 8,
        qty: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 9,
        qty: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 10,
        qty: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 11,
        qty: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
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
    return queryInterface.bulkDelete('carts', null, {});
  }
};