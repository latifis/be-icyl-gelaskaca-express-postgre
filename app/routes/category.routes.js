const { authJwt } = require("../middleware");
const categorys = require("../controllers/category.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Category
    router.post("/", categorys.create);
  
    // Retrieve all Categorys
    router.get("/", categorys.findAll);
  
    // // Retrieve all published Categorys
    // // router.get("/published", events.findAllPublished);
  
    // Retrieve a single Category with id
    router.get("/:id", categorys.findOne);
  
    // Update a Category with id
    router.put("/:id", categorys.update);
  
    // Delete a Category with id
    router.delete("/:id", categorys.delete);
  
    // // Create a new Category
    // router.delete("/", events.deleteAll);
  
    app.use('/api/categorys', router);
    // [authJwt.verifyToken, authJwt.isPic],

  };