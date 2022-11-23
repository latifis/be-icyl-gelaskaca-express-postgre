module.exports = (sequelize, Sequelize) => {
    const HistoryStatus = sequelize.define("historyStatus", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return HistoryStatus;
  };