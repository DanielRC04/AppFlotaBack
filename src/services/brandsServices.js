const BRANDS = require('../models/brandsQuerys');
const DB = require('../database/dbRent.js');

const brandsServices = {};

brandsServices.getBrandsService = function () {
    try {
        const query = BRANDS.getBrandsQuery();
        return DB.sequelize.query(query);
    } catch (err) {
        return err.message;
    }
}

brandsServices.getBrandService = function (data) {
    try {
        const query = BRANDS.getBrandQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        return err.message;
    }
}

brandsServices.addBrandService = function (data) {
    try {
        const query = BRANDS.addBrandQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                name: data.name
            }
        });
    } catch (err) {
        return err.message;
    }
}

brandsServices.updateBrandService = function (data) {
    try {
        const query = BRANDS.updateBrandQuery();
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

brandsServices.deleteBrandService = function (data) {
    try {
        const query = BRANDS.deleteBrandQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = brandsServices;
