const CAR_CATEGORIES = require('../models/carCategoriesQuerys');
const DB = require('../database/dbRent.js');

const carCategoriesServices = {};

carCategoriesServices.getCarCategoriesService = function () {
    try {
        const query = CAR_CATEGORIES.getCarCategoriesQuery();
        return DB.sequelize.query(query);
    } catch (err) {
        return err.message;
    }
}

carCategoriesServices.getCarCategoryService = function (data) {
    try {
        const query = CAR_CATEGORIES.getCarCategoryQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        return err.message;
    }
}

carCategoriesServices.addCarCategoryService = function (data) {
    try {
        const query = CAR_CATEGORIES.addCarCategoryQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                name: data.name
            }
        });
    } catch (err) {
        return err.message;
    }
}

carCategoriesServices.updateCarCategoryService = function (data) {
    try {
        const query = CAR_CATEGORIES.updateCarCategoryQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                name: data.name
            }
        });
    } catch (err) {
        return err.message;
    }
}

carCategoriesServices.deleteCarCategoryService = function (data) {
    try {
        const query = CAR_CATEGORIES.deleteCarCategoryQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = carCategoriesServices;
