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
    return queryInterface.bulkInsert('productGalleries', [
      {
        id: 1,
        filename: "Buah",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 3,
      },
      {
        id: 2,
        filename: "Buah",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 4,
      },
      {
        id: 3,
        filename: "Bukan Buah",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 8,
      },
      {
        id: 4,
        filename: "Buah Tangan",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 5,
      },
      {
        id: 5,
        filename: "Buah-Buahan",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 2,
      },
      {
        id: 6,
        filename: "Nangka",
        path: "https://gelaskaca.com/img/image-0001012321123123.img",
        is_default: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 4,
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
    return queryInterface.bulkDelete('productGalleries', null, {});
  }
};