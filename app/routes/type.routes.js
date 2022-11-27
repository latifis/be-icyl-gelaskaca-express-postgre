const { authJwt } = require("../middleware");
const types = require("../controllers/type.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Type
    router.post("/", types.create);
  
    // Retrieve all Types
    router.get("/", types.findAll);
  
    // Retrieve a single Types with id
    router.get("/:id", types.findOne);
  
    // Update a Type with id
    router.put("/:id", types.update);
  
    // Delete a Type with id
    router.delete("/:id", types.delete);
  
    app.use('/api/types', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };