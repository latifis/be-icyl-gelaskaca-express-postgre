module.exports = (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      address: {
        type: Sequelize.STRING
      },
      rent_start: {
        type: Sequelize.STRING
        //date
      },
      rent_end: {
        type: Sequelize.STRING
        //date
      },
      state: {
        type: Sequelize.INTEGER
      }
    });
  
    return Rent;
  };