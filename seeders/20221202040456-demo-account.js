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
    return queryInterface.bulkInsert('accounts', [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        roleId: 3
      },
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        roleId: 1
      },
      {
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        roleId: 2
      },
      {
        id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        roleId: 1
      },
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        roleId: 2
      },
      {
        id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        roleId: 1
      },
      {
        id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        roleId: 1
      },
      {
        id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10,
        roleId: 2
      },
      {
        id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        roleId: 3
      },
      {
        id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        roleId: 1
      },
      {
        id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        roleId: 3
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
    return queryInterface.bulkDelete('accounts', null, {});
  }
};