const db = require("../models");
const Returned = db.returned;
const Op = db.Sequelize.Op;

// Create and Save a new Returned
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a Returned
    const returned = {
        method: req.body.method,
        remain_pay: req.body.remain_pay,
        total: req.body.rent_end,
        rentId: req.body.rentId,
        userId: req.body.userId
    };

    // Save Returned in the database
    Returned.create(returned)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Returned."
            });
        });
};

// Retrieve all Returned from the database.
exports.findAll = (req, res) => {
   
    Returned.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving returneds."
        });
      });
};

// Find a single Returneds with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Returned.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Returned with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Returned with id=" + id
        });
      });
};

// Update a Returned by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Returned.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Returned was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Returned with id=${id}. Maybe Returned was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Returned with id=" + id
        });
      });
};

// Delete a Returned with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Returned.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Returned was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Returned with id=${id}. Maybe Returned was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Returned with id=" + id
        });
      });
};