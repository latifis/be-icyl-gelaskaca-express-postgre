const db = require("../models");
const Cart = db.cart;
const Op = db.Sequelize.Op;

// Create and Save a new Category
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }

    // Create a Category
    const cart = {
        qty: req.body.qty,
        rentId: req.body.rentId,
        userId: req.body.userId
    };

    // Save Category in the database
    Cart.create(cart)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Cart."
            });
        });
};

// Retrieve all Carts from the database.
exports.findAll = (req, res) => {
   
    Cart.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving carts."
        });
      });
};

// Find a single Carts with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cart.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Cart with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cart with id=" + id
        });
      });
};

// Update a Cart by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cart.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cart with id=" + id
        });
      });
};

// Delete a Cart with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Cart.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cart with id=" + id
        });
      });
};