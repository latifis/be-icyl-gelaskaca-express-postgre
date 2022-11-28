const { authJwt } = require("../middleware");
const historys = require("../controllers/history.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new History
    router.post("/", historys.create);
  
    // Retrieve all Historys
    router.get("/", historys.findAll);
  
    // Retrieve a single Historys with id
    router.get("/:id", historys.findOne);
  
    // Update a History with id
    router.put("/:id", historys.update);
  
    // Delete a History with id
    router.delete("/:id", historys.delete);
  
    app.use('/api/historys', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };