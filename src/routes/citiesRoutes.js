const express = require('express');
const router = express.Router();
const citiesControllers = require('../controllers/citiesControllers');

router
    .get("/getAllCities", citiesControllers.getCitiesController)
    .post("/getCity", citiesControllers.getCityController)
    .post("/addCity", citiesControllers.addCityController)
    .put("/updateCity", citiesControllers.updateCityController)
    .delete("/deleteCity", citiesControllers.deleteCityController);

module.exports = router;
