const CARS = require('../models/carsQuerys');
const DB = require('../database/dbRent.js');

const carsServices = {};

carsServices.getCarsService = function () {
    try {
        const query = CARS.getCarsQuery();
        return DB.sequelize.query(query);
    } catch (err) {
        return err.message;
    }
}

carsServices.getCarService = function (data) {
    try {
        const query = CARS.getCarQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        return err.message;
    }
}

carsServices.addCarService = function (data) {
    try {
        const query = CARS.addCarQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                name: data.name,
                description: data.description,
                priceHour: data.priceHour,
                stock: data.stock,
                model: data.model,
                licensePlate: data.licensePlate,
                brandId: data.brandId,
                carCategoryId: data.carCategoryId
            }
        });
    } catch (err) {
        return err.message;
    }
}

carsServices.updateCarService = function (data) {
    try {
        const query = CARS.updateCarQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                name: data.name,
                description: data.description,
                priceHour: data.priceHour,
                stock: data.stock,
                model: data.model,
                licensePlate: data.licensePlate,
                brandId: data.brandId,
                carCategoryId: data.carCategoryId
            }
        });
    } catch (err) {
        return err.message;
    }
}

carsServices.deleteCarService = function (data) {
    try {
        const query = CARS.deleteCarQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = carsServices;
