const STATES = require('../models/statesQuerys');
const DB = require('../database/dbRent.js');

statesServices = {};

statesServices.getStatesService = function () {
    try{
        const query = STATES.getStatesQuery();
        return DB.sequelize.query(query);
    }
    catch(err){
        return err.message;
    }
}

statesServices.getStateService = function (data) {
    try{
        const query = STATES.getStateQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    }
    catch(err){
        return err.message;
    }
}

statesServices.addStateService = function (data) {
    try{
        const query = STATES.addStateQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                name: data.name
            }
         });
    }
    catch(err){
        return err.message;
    }
}

statesServices.updateStateService = function (data) {
    try{
        const query = STATES.updateStateQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                name: data.name
            }
         });
    }
    catch(err){
        return err.message;
    }
}

statesServices.deleteStateService = function (data) {
    try{
        const query = STATES.deleteStateQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
         });
    }
    catch(err){
        return err.message;
    }
}

module.exports = statesServices;