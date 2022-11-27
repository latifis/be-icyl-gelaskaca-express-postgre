const { authJwt } = require("../middleware");
const stocks = require("../controllers/stock.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Stock
    router.post("/", stocks.create);
  
    // Retrieve all Stocks
    router.get("/", stocks.findAll);
  
    // Retrieve a single Stocks with id
    router.get("/:id", stocks.findOne);
  
    // Update a Stock with id
    router.put("/:id", stocks.update);
  
    // Delete a Stock with id
    router.delete("/:id", stocks.delete);
  
    app.use('/api/stocks', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };