const express = require('express');
const router = express.Router();
const carImagesControllers = require('../controllers/carImagesControllers');

router
    .get("/getAllCarImages", carImagesControllers.getCarImagesController)
    .post("/getCarImage", carImagesControllers.getCarImageController)
    .post("/addCarImage", carImagesControllers.addCarImageController)
    .put("/updateCarImage", carImagesControllers.updateCarImageController)
    .delete("/deleteCarImage", carImagesControllers.deleteCarImageController);

module.exports = router;
