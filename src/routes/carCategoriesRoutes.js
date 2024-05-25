const express = require('express');
const router = express.Router();
const carCategoriesControllers = require('../controllers/carCategoriesControllers');

router
    .get("/getAllCarCategories", carCategoriesControllers.getCarCategoriesController)
    .post("/getCarCategory", carCategoriesControllers.getCarCategoryController)
    .post("/addCarCategory", carCategoriesControllers.addCarCategoryController)
    .put("/updateCarCategory", carCategoriesControllers.updateCarCategoryController)
    .delete("/deleteCarCategory", carCategoriesControllers.deleteCarCategoryController);

module.exports = router;
