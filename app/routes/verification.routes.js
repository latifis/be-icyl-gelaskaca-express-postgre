const { authJwt } = require("../middleware");
const verifications = require("../controllers/verification.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Verification
    router.post("/", verifications.create);
  
    // Retrieve all Verifications
    router.get("/", verifications.findAll);
  
    // Retrieve a single Verifications with id
    router.get("/:id", verifications.findOne);
  
    // Update a Verification with id
    router.put("/:id", verifications.update);
  
    // Delete a Verification with id
    router.delete("/:id", verifications.delete);
  
    app.use('/api/verifications', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };