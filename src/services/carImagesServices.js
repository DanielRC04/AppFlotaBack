const CAR_IMAGES = require('../models/carImagesQuerys');
const DB = require('../database/dbRent.js');
const fs = require('fs');
const path = require('path');

const carImagesServices = {};

function saveImage(base64Data, carName) {
    const imageBuffer = Buffer.from(base64Data, 'base64');
    const imagePath = path.join(path.dirname(__dirname), 'assets/img', `${carName}.jpg`);

    fs.writeFileSync(imagePath, imageBuffer);

    return imagePath;
}

carImagesServices.getCarImagesService = function () {
    try {
        const query = CAR_IMAGES.getCarImagesQuery();
        return DB.sequelize.query(query);
    } catch (err) {
        return err.message;
    }
}

carImagesServices.getCarImageService = function (data) {
    try {
        const query = CAR_IMAGES.getCarImageQuery(data);
        return DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        return err.message;
    }
}

carImagesServices.addCarImageService = function (data) {
    try {
        const imagePath = saveImage(data.image, data.carName);
        const query = CAR_IMAGES.addCarImageQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                carId: data.carId,
                image: imagePath
            }
        });
    } catch (err) {
        return err.message;
    }
}

carImagesServices.updateCarImageService = function (data) {
    try {
        const imagePath = saveImage(data.image, data.carName);
        const query = CAR_IMAGES.updateCarImageQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                carId: data.carId,
                image: imagePath
            }
        });
    } catch (err) {
        return err.message;
    }
}

carImagesServices.deleteCarImageService = function (data) {
    try {
        const query = CAR_IMAGES.deleteCarImageQuery();
        return DB.sequelize.query(query, { 
            replacements: {
                id: data.id
            }
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = carImagesServices;
