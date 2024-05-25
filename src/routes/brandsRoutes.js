const express = require('express');
const router = express.Router();
const brandsControllers = require('../controllers/brandsControllers');

router
    .get("/getAllBrands", brandsControllers.getBrandsController)
    .post("/getBrand", brandsControllers.getBrandController)
    .post("/addBrand", brandsControllers.addBrandController)
    .put("/updateBrand", brandsControllers.updateBrandController)
    .delete("/deleteBrand", brandsControllers.deleteBrandController);

module.exports = router;
