module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
      invoice: {
        type: Sequelize.STRING
      }
    });
  
    return History;
  };