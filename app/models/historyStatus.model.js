module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return History;
  };