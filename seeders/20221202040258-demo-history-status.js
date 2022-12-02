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
    return queryInterface.bulkInsert('historyStatuses', [
      {
        id: 1,
        name: "Canceled",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Upcoming",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Completed",
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('historyStatuses', null, {});
  }
};