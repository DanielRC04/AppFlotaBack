const RENTS = require('../models/rentsQuerys');
const DB = require('../database/dbRent.js');

const rentsServices = {};

rentsServices.getRentsService = async () => {
    try {
        const query = RENTS.getRentsQuery();
        return await DB.sequelize.query(query);
    } catch (err) {
        throw new Error(err.message);
    }
}

rentsServices.getRentService = async (id) => {
    try {
        const query = RENTS.getRentQuery(id);
        return await DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        throw new Error(err.message);
    }
}

rentsServices.addRentService = async (data) => {
    try {
        const query = RENTS.addRentQuery();
        return await DB.sequelize.query(query, { 
            replacements: {
                userId1: data.userId1,
                userId: data.userId,
                carId: data.carId,
                startDate: data.startDate,
                endDate: data.endDate,
                realEndDate: data.realEndDate,
                price: data.price,
                rentStatus: data.rentStatus,
                remarks: data.remarks
            }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

rentsServices.updateRentService = async (data) => {
    try {
        const query = RENTS.updateRentQuery();
        return await DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                userId1: data.userId1,
                userId: data.userId,
                carId: data.carId,
                startDate: data.startDate,
                endDate: data.endDate,
                realEndDate: data.realEndDate,
                price: data.price,
                rentStatus: data.rentStatus,
                remarks: data.remarks
            }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

rentsServices.deleteRentService = async (id) => {
    try {
        const query = RENTS.deleteRentQuery();
        return await DB.sequelize.query(query, { 
            replacements: { id }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = rentsServices;
