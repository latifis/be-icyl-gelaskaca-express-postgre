const db = require("../models");
const Rent = db.rent;
const Op = db.Sequelize.Op;
var Random = require('random-string-alphanumeric-generator');

// Create and Save a new Rent
exports.create = (req, res) => {

  // // Validate request
  // if (!req.body.name) {
  //     res.status(400).send({
  //     message: "Content can not be empty!"
  //     });
  //     return;
  // }

  let random = Random.randomAlphanumeric(5, "uppercase")
  
  const d = new Date();
  let time = Math.round(d.getTime() / 10000000000000 * 35 * 4);

  // Create a Rent
  const rent = {
    order_num: req.body.userId + random + time,
    address: req.body.address,
    rent_start: req.body.rent_start,
    rent_end: req.body.rent_end,
    state: req.body.state,
    userId: req.body.userId,
    cartId: req.body.cartId,
    paymentId: req.body.paymentId,
  };

  // Save Rent in the database
  Rent.create(rent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Rent."
      });
    });
};

// Retrieve all Rent from the database.
exports.findAll = (req, res) => {

  Rent.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rents."
      });
    });
};

// Find a single Rents with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Rent.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Rent with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Rent with id=" + id
      });
    });
};

// Update a Rent by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Rent.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Rent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Rent with id=${id}. Maybe Rent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Rent with id=" + id
      });
    });
};

// Delete a Rent with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Rent.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Rent was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Rent with id=${id}. Maybe Rent was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Rent with id=" + id
      });
    });
};