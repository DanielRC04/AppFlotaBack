const brandsServices = require('../services').brandsServices;

const brandsControllers = {};

brandsControllers.getBrandsController = async (req, res) => {
    try {
        const data = await brandsServices.getBrandsService();
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

brandsControllers.getBrandController = async (req, res) => {
    try {
        const data = await brandsServices.getBrandService(req.body.id);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

brandsControllers.addBrandController = async (req, res) => {
    try {
        const data = await brandsServices.addBrandService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

brandsControllers.updateBrandController = async (req, res) => {
    try {
        const data = await brandsServices.updateBrandService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

brandsControllers.deleteBrandController = async (req, res) => {
    try {
        const data = await brandsServices.deleteBrandService(req.body);
        res.status(200).send({ status: 'success', data });
    } catch (err) {
        res.status(500).send({ status: 'error', data: err.message });
    }
}

module.exports = brandsControllers;
