module.exports = (sequelize, Sequelize) => {
    const Userr = sequelize.define("userr", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  
    return Userr;
  };