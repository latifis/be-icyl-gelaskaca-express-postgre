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
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: "Rudi",
        email: "rudi@gmail.com",
        password: "$2a$08$YRUP2dnlka212343241]w/tsJoVTDFkHxKI1bFd0BuO",
        name: "Rudi",
        birth_date: new Date(),
        age: 20,
        address: "Tawakal Street no. 7, Jakarta",
        Phone: "0823443287491",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        username: "Budi",
        email: "budi@gmail.com",
        password: "$2a$08$YRUP2dnlka21b34-213=]PSDD/tsJoVTDFkHxKI1bFd0BuO",
        name: "Budi",
        birth_date: new Date(),
        age: 43,
        address: "Rudoh Street no. 45, Palu",
        Phone: "082419329871",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        username: "Deitar",
        email: "deitar@gmail.com",
        password: "$2a$08$YRUP2dnlka2123p012348]w/tsJoVTDFkHx239841bFd0BuO",
        name: "Dietar",
        birth_date: new Date(),
        age: 24,
        address: "Tabun Street no. 114, Padang",
        Phone: "0832484710428",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        username: "Guda",
        email: "guda@gmail.com",
        password: "$2a$08$YRUP2dnlka212343241]w/tsJoVTDFkHxKI1bFd0BuO",
        name: "Guda",
        birth_date: new Date(),
        age: 20,
        address: "Faetira Street no. 54, Batu",
        Phone: "082347164287",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        username: "Kaena",
        email: "kaena@gmail.com",
        password: "$2a$08$YRUP2dnlka212343241]w/tsJoVTDFkHxKI1bFd0BuO",
        name: "Kaena",
        birth_date: new Date(),
        age: 20,
        address: "Suparman Street no. 433, Jakarta",
        Phone: "0823416348712",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        username: "Hasbi",
        email: "hasbi@gmail.com",
        password: "$2a$08$asdg3294[-34]]w/tsJoVTDFkHxKI1bFd0BuO",
        name: "Hasbi",
        birth_date: new Date(),
        age: 16,
        address: "Rowan Street no. 3, Lamongan",
        Phone: "083143147451",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        username: "Norma",
        email: "norma@gmail.com",
        password: "$2a$023491*%*YRUP2dnlka212343241]w/tsJoVsdjkHxKI1bFd0BuO",
        name: "Norma",
        birth_date: new Date(),
        age: 12,
        address: "Bachtiar Street no. 447, Jakarta",
        Phone: "08123558372",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        username: "Jowan",
        email: "jowan@gmail.com",
        password: "$2a$08$YRUP2dnlka2121248usd()(&41]w/tsJoVTDFkHxK0249sldd0BuO",
        name: "Jowan",
        birth_date: new Date(),
        age: 34,
        address: "Lost Street no. 7, Hargentina",
        Phone: "081235656722",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        username: "Lowan",
        email: "lowan@gmail.com",
        password: "$2a$08$YRUP2dnlk134982343241]w/weahidh)(*+VTDFkHxKI1bFd0BuO",
        name: "Lowan",
        birth_date: new Date(),
        age: 40,
        address: "Westarina Street no. 43, Bali",
        Phone: "084183791842",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        username: "Reita",
        email: "reita@gmail.com",
        password: "$2a$08$YRUP2dnlka212343241]w/tsJoVTDFkHxKI1bFd0BuO",
        name: "Reita",
        birth_date: new Date(),
        age: 12,
        address: "Hosdarita Street no. 90, Pekanbaru",
        Phone: "081276567512",
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
    return queryInterface.bulkDelete('users', null, {});
  }
};