const express = require('express');
const router = express.Router();
const carsControllers = require('../controllers/carsControllers');

router
    .get("/getAllCars", carsControllers.getCarsController)
    .post("/getCar", carsControllers.getCarController)
    .post("/addCar", carsControllers.addCarController)
    .put("/updateCar", carsControllers.updateCarController)
    .delete("/deleteCar", carsControllers.deleteCarController);

module.exports = router;
