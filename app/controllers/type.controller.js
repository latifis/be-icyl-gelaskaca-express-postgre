const db = require("../models");
const Type = db.type;
const Op = db.Sequelize.Op;

// Create and Save a new Rent
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Rent
    const type = {
        name: req.body.name,
        productId: req.body.productId
    };

    // Save Rent in the database
    Type.create(type)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Type."
            });
        });
};

// Retrieve all Type from the database.
exports.findAll = (req, res) => {
   
    Type.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving types."
        });
      });
};

// Find a single Types with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Type.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Type with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Type with id=" + id
        });
      });
};

// Update a Type by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Type.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Type was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Type with id=${id}. Maybe Type was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Type with id=" + id
        });
      });
};

// Delete a Type with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Type.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Type was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Type with id=${id}. Maybe Type was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Type with id=" + id
        });
      });
};