const carCategoriesServices = require('../services').carCategoriesServices;

const carCategoriesControllers = {};

carCategoriesControllers.getCarCategoriesController = async (req, res) => {
    try {
        const data = await carCategoriesServices.getCarCategoriesService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carCategoriesControllers.getCarCategoryController = async (req, res) => {
    try {
        const data = await carCategoriesServices.getCarCategoryService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carCategoriesControllers.addCarCategoryController = async (req, res) => {
    try {
        const data = await carCategoriesServices.addCarCategoryService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carCategoriesControllers.updateCarCategoryController = async (req, res) => {
    try {
        const data = await carCategoriesServices.updateCarCategoryService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carCategoriesControllers.deleteCarCategoryController = async (req, res) => {
    try {
        const data = await carCategoriesServices.deleteCarCategoryService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = carCategoriesControllers;
