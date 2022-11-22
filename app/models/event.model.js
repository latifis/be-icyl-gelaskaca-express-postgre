module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      freelance: {
        type: Sequelize.STRING
      },
      mou: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Event;
  };
  