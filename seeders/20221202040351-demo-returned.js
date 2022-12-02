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
    return queryInterface.bulkInsert('returneds', [
      {
        id: 1,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        rentId: 2
      },
      {
        id: 2,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 4
      },
      {
        id: 3,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        rentId: 3
      },
      {
        id: 4,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        rentId: 4
      },
      {
        id: 5,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        rentId: 7
      },
      {
        id: 6,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 7
      },
      {
        id: 7,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        rentId: 4
      },
      {
        id: 8,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 2
      },
      {
        id: 9,
        method: "DP",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        rentId: 5
      },
      {
        id: 10,
        method: "Credit",
        remain_pay: 20000,
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        rentId: 2
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
    return queryInterface.bulkDelete('returneds', null, {});
  }
};