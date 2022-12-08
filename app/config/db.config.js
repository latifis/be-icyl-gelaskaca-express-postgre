module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "12345678",
  DB: "gelaskaca",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// {
//   "development": {
//     "username": "root",
//     "password": "",
//     "database": "gelaskaca",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": "",
//     "database": "gelaskaca",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "root",
//     "password": "",
//     "database": "gelaskaca",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
