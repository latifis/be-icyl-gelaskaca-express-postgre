const { authJwt } = require("../middleware");
const categorys = require("../controllers/category.controller.js");

const express = require('express');
const path = require('path');
const router = express.Router()

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(
            null,
            path.parse(file.originalname).name + "-" +
            Date.now() +
            path.extname(file.originalname
            )
        )
    }
})

const upload = multer({
  storage: storage,
  dest: "public/images"
})

module.exports = app => {

  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new Category
  router.post("/", upload.single('profile'), categorys.create);

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

  // // Delete a Category with id
  // router.post("/upload_files", categorys.uploadFiles);

  // // Create a new Category
  // router.delete("/", events.deleteAll);

  app.use('/api/categorys', router);
  // [authJwt.verifyToken, authJwt.isPic],

};