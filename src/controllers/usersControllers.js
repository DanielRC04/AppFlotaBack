const usersServices = require('../services/usersServices');

const usersControllers = {};

usersControllers.getUsersController = async (req, res) => {
    try {
        const data = await usersServices.getUsersService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

usersControllers.getUserController = async (req, res) => {
    try {
        const data = await usersServices.getUserService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

usersControllers.addUserController = async (req, res) => {
    try {
        const data = await usersServices.addUserService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

usersControllers.updateUserController = async (req, res) => {
    try {
        const data = await usersServices.updateUserService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

usersControllers.deleteUserController = async (req, res) => {
    try {
        const data = await usersServices.deleteUserService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = usersControllers;
