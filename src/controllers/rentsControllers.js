const rentsServices = require('../services/rentsServices');

const rentsControllers = {};

rentsControllers.getRentsController = async (req, res) => {
    try {
        const data = await rentsServices.getRentsService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

rentsControllers.getRentController = async (req, res) => {
    try {
        const { id } = req.body;
        const data = await rentsServices.getRentService(id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

rentsControllers.addRentController = async (req, res) => {
    try {
        const data = await rentsServices.addRentService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

rentsControllers.updateRentController = async (req, res) => {
    try {
        const data = await rentsServices.updateRentService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

rentsControllers.deleteRentController = async (req, res) => {
    try {
        const { id } = req.body;
        const data = await rentsServices.deleteRentService(id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = rentsControllers;

