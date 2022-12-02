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
    return queryInterface.bulkInsert('verifications', [
      {
        id: 1,
        status: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        status: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        status: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        status: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        status: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        status: 346,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        status: 324,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        status: 343,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        status: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete('verifications', null, {});
  }
};