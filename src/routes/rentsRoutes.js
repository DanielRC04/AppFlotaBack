const express = require('express');
const router = express.Router();
const rentsControllers = require('../controllers/rentsControllers');

router
    .get("/getAllRents",  rentsControllers.getRentsController)
    .post("/getRent",  rentsControllers.getRentController)
    .post("/addRent", rentsControllers.addRentController)
    .put("/updateRent", rentsControllers.updateRentController)
    .delete("/deleteRent", rentsControllers.deleteRentController);

module.exports = router;
