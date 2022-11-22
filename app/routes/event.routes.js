const { authJwt } = require("../middleware");
const events = require("../controllers/event.controller.js");

module.exports = app => {
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new Event
    router.post("/", events.create);
  
    // Retrieve all Events
    router.get("/", events.findAll);
  
    // Retrieve all published Events
    // router.get("/published", events.findAllPublished);
  
    // Retrieve a single Event with id
    router.get("/:id", events.findOne);
  
    // Update a Event with id
    router.put("/:id", events.update);
  
    // Delete a Event with id
    router.delete("/:id", events.delete);
  
    // Create a new Event
    router.delete("/", events.deleteAll);
  
    app.use('/api/events',[authJwt.verifyToken, authJwt.isAdmin], router);

  };