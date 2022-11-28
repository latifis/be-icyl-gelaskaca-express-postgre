const db = require("../models");
const HistoryStatus = db.historyStatus;
const Op = db.Sequelize.Op;

// Create and Save a new HistoryStatus
exports.create = (req, res) => {
  
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    //     });
    //     return;
    // }
    
    // Create a HistoryStatus
    const historyStatus = {
        name: req.body.name
    };

    // Save HistoryStatus in the database
    HistoryStatus.create(historyStatus)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the HistoryStatus."
            });
        });
};

// Retrieve all HistoryStatus from the database.
exports.findAll = (req, res) => {
   
    HistoryStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HistoryStatuss."
        });
      });
};

// Find a single HistoryStatuss with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    HistoryStatus.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find HistoryStatus with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving HistoryStatus with id=" + id
        });
      });
};

// Update a HistoryStatus by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    HistoryStatus.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HistoryStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update HistoryStatus with id=${id}. Maybe HistoryStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating HistoryStatus with id=" + id
        });
      });
};

// Delete a HistoryStatus with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    HistoryStatus.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HistoryStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete HistoryStatus with id=${id}. Maybe HistoryStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete HistoryStatus with id=" + id
        });
      });
};