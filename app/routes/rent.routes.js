const { authJwt } = require("../middleware");
const rents = require("../controllers/rent.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Rent
    router.post("/", rents.create);
  
    // Retrieve all Rents
    router.get("/", rents.findAll);
  
    // Retrieve a single Rents with id
    router.get("/:id", rents.findOne);
  
    // Update a Rent with id
    router.put("/:id", rents.update);
  
    // Delete a Rent with id
    router.delete("/:id", rents.delete);
  
    app.use('/api/rents', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };