const express = require('express');

const Cars = require("./cars-model.js")

const knex = require("knex")

const router = express.Router();


//Get All cars
router.get("/", (req, res) => {
    Cars.get().then(cars => res.status(200).json(cars));
  });
    


// Get by car id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Cars.get(id).then(cars => {
    if (cars) {
      res.status(200).json(cars);
    } else {
      res
        .status(404)
        .json({ error: "Car with specified id not found." })
        .end();
    }
  });
});


//get car by VIN
router.get("/:VIN", (req, res) => {
  const { VIN } = req.params;
  Cars.get(VIN).then(car => {
    if (car) {
      res.status(200).json(car);
    } else {
      res
        .status(404)
        .json({ error: `Car with VIN ${VIN}  does not exist` })
        .end();
    }
  });
});


//Get car by make
router.get("/:make", (req, res) => {
  const { make } = req.params;
  Cars.get(make).then(cars => {
    if (cars) {
      res.status(200).json(cars);
    } else {
      res
        .status(404)
        .json({ error: `${make} vehicles available.` })
        .end();
    }
  });
});


// Get car by model
router.get("/:model", (req, res) => {
  const { model } = req.params;
  Cars.get(model).then(cars => {
    if (cars) {
      res.status(200).json(cars);
    } else {
      res
        .status(404)
        .json({ error: `Car with ${model} unavailable.` })
        .end();
    }
  });
});


// Post a new car
router.post("/", (req, res) => {
  const { VIN, make, model } = req.body;
  Cars.insert({ VIN, make, model})
    .then(car => {
      if (car) {
        res.status(200).json(car);
      } else {
        res
          .status(404)
          .json({ error: ` VIN, make, model required.` })
          .end();
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Error adding vehicle.", message: err.message });
    });
});

module.exports = router;





