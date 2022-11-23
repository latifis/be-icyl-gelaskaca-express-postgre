module.exports = (sequelize, Sequelize) => {
    const Returned = sequelize.define("returned", {
      method: {
        type: Sequelize.STRING
      },
      remain_pay: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      }
    });
  
    return Returned;
  };