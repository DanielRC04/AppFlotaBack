const carsServices = require('../services').carsServices;

const carsControllers = {};

carsControllers.getCarsController = async (req, res) => {
    try {
        const data = await carsServices.getCarsService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carsControllers.getCarController = async (req, res) => {
    try {
        const data = await carsServices.getCarService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carsControllers.addCarController = async (req, res) => {
    try {
        const data = await carsServices.addCarService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carsControllers.updateCarController = async (req, res) => {
    try {
        const data = await carsServices.updateCarService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carsControllers.deleteCarController = async (req, res) => {
    try {
        const data = await carsServices.deleteCarService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = carsControllers;
