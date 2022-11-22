module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stock", {
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      }
    });
  
    return Stock;
  };