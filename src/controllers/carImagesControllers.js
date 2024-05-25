const carImagesServices = require('../services').carImagesServices;

const carImagesControllers = {};

carImagesControllers.getCarImagesController = async (req, res) => {
    try {
        const data = await carImagesServices.getCarImagesService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carImagesControllers.getCarImageController = async (req, res) => {
    try {
        const data = await carImagesServices.getCarImageService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carImagesControllers.addCarImageController = async (req, res) => {
    try {
        const data = await carImagesServices.addCarImageService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carImagesControllers.updateCarImageController = async (req, res) => {
    try {
        const data = await carImagesServices.updateCarImageService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

carImagesControllers.deleteCarImageController = async (req, res) => {
    try {
        const data = await carImagesServices.deleteCarImageService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = carImagesControllers;
