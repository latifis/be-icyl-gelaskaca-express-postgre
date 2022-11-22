module.exports = (sequelize, Sequelize) => {
    const Delivery = sequelize.define("delivery", {
      addr_office: {
        type: Sequelize.STRING
      },
      fare: {
        type: Sequelize.INTEGER
      }
    });
  
    return Delivery;
  };