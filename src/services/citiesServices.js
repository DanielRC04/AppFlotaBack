const CITIES = require('../models/citiesQuerys');
const DB = require('../database/dbRent.js');

const citiesServices = {};

citiesServices.getCitiesService = function () {
    try {
        const query = CITIES.getCitiesQuery();
        return DB.sequelize.query(query);
    } catch (err) {
        return err.message;
    }
}

citiesServices.getCityService = function (data) {
    try {
        const query = CITIES.getCityQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        return err.message;
    }
}

citiesServices.addCityService = function (data) {
    try {
        const query = CITIES.addCityQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                name: data.name,
                stateId: data.stateId
            }
        });
    } catch (err) {
        return err.message;
    }
}

citiesServices.updateCityService = function (data) {
    try {
        const query = CITIES.updateCityQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                name: data.name,
                stateId: data.stateId
            }
        });
    } catch (err) {
        return err.message;
    }
}

citiesServices.deleteCityService = function (data) {
    try {
        const query = CITIES.deleteCityQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = citiesServices;
