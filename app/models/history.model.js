module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
      status: {
        type: Sequelize.STRING
      },
      invoice: {
        type: Sequelize.STRING
      }
    });
  
    return History;
  };