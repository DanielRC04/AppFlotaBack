const express = require('express');
const router = express.Router();
const statesControllers = require('../controllers/statesControllers');

router
    .get("/getAllStates",  statesControllers.getStatesController)
    .post("/getState",  statesControllers.getStateController)
    .post("/addState", statesControllers.addStateController)
    .put("/updateState", statesControllers.updateStateController)
    .delete("/deleteState", statesControllers.deleteStateController);

module.exports = router;