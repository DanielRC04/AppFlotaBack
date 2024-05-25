const citiesServices = require('../services').citiesServices;

const citiesControllers = {};

citiesControllers.getCitiesController = async (req, res) => {
    try {
        const data = await citiesServices.getCitiesService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

citiesControllers.getCityController = async (req, res) => {
    try {
        const data = await citiesServices.getCityService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

citiesControllers.addCityController = async (req, res) => {
    try {
        const data = await citiesServices.addCityService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

citiesControllers.updateCityController = async (req, res) => {
    try {
        const data = await citiesServices.updateCityService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

citiesControllers.deleteCityController = async (req, res) => {
    try {
        const data = await citiesServices.deleteCityService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = citiesControllers;
