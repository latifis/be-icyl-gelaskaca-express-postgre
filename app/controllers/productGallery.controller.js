const db = require("../models");
const ProductGallery = db.productGallery;
const Op = db.Sequelize.Op;

// Create and Save a new ProductGallery
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a productGallery
    const productGallery = {
        filename: req.body.filename,
        path: req.body.path,
        is_default: req.body.is_default,
        productId:req.body.productId
    };

    // Save ProductGallery in the database
    ProductGallery.create(productGallery)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ProductGallery."
            });
        });
};

// Retrieve all ProductGallery from the database.
exports.findAll = (req, res) => {
   
  ProductGallery.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ProductGallery."
        });
      });
};

// Find a single ProductGallerys with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ProductGallery.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find ProductGallery with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ProductGallery with id=" + id
        });
      });
};

// Update a ProductGallery by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ProductGallery.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductGallery was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ProductGallery with id=${id}. Maybe ProductGallery was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating PaymentProof with id=" + id
        });
      });
};

// Delete a ProductGallery with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ProductGallery.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductGallery was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ProductGallery with id=${id}. Maybe ProductGallery was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ProductGallery with id=" + id
        });
      });
};