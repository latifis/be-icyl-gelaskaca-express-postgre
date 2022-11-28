const { authJwt } = require("../middleware");
const returneds = require("../controllers/returned.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Returned
    router.post("/", returneds.create);
  
    // Retrieve all Returned
    router.get("/", returneds.findAll);
  
    // Retrieve a single Returneds with id
    router.get("/:id", returneds.findOne);
  
    // Update a Returned with id
    router.put("/:id", returneds.update);
  
    // Delete a Returned with id
    router.delete("/:id", returneds.delete);
  
    app.use('/api/returneds', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };