module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {      
      username: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.STRING
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
  
    return User;
  };