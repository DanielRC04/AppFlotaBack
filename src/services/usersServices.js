const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const USERS = require('../models/usersQuerys');
const DB = require('../database/dbRent.js');
const saltRounds = 10;


const usersServices = {};

async function saveImage(base64Data, document) {
    const imageBuffer = Buffer.from(base64Data, 'base64');
    const imagePath = path.join(path.dirname(__dirname), 'assets/img', `${document}.jpg`);

    fs.writeFileSync(imagePath, imageBuffer);

    return imagePath;
}

usersServices.getUsersService = async () => {
    try {
        const query = USERS.getUsersQuery();
        return await DB.sequelize.query(query);
    } catch (err) {
        throw new Error(err.message);
    }
}

usersServices.getUserService = async (id) => {
    try {
        const query = USERS.getUserQuery(id);
        return await DB.sequelize.query(query, { type: DB.Sequelize.QueryTypes.SELECT });
    } catch (err) {
        throw new Error(err.message);
    }
}

usersServices.addUserService = async (data) => {
    try {

        const query = USERS.addUserQuery();

        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        const photo = await saveImage(data.photo, data.document);

        return await DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                document: data.document,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password, 
                phone: data.phone,
                photo: photo,
                userType: data.userType,
                cityId: data.cityId,
                userName: data.userName,
                normalizedUserName: data.normalizedUserName,
                normalizedEmail: data.normalizedEmail,
                emailConfirmed: data.emailConfirmed,
                passwordHash: hashedPassword,
                securityStamp: data.securityStamp,
                concurrencyStamp: data.concurrencyStamp,
                phoneNumber: data.phoneNumber,
                phoneNumberConfirmed: data.phoneNumberConfirmed,
                twoFactorEnabled: data.twoFactorEnabled,
                lockoutEnd: data.lockoutEnd,
                lockoutEnabled: data.lockoutEnabled,
                accessFailedCount: data.accessFailedCount
            }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}


usersServices.updateUserService = async (data) => {
    try {
        const query = USERS.updateUserQuery();
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        const photo = await saveImage(data.photo, data.document);
        return await DB.sequelize.query(query, { 
            replacements: {
                id: data.id,
                document: data.document,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                phone: data.phone,
                photo: photo,
                userType: data.userType,
                cityId: data.cityId,
                userName: data.userName,
                normalizedUserName: data.normalizedUserName,
                normalizedEmail: data.normalizedEmail,
                emailConfirmed: data.emailConfirmed,
                passwordHash: hashedPassword,
                securityStamp: data.securityStamp,
                concurrencyStamp: data.concurrencyStamp,
                phoneNumber: data.phoneNumber,
                phoneNumberConfirmed: data.phoneNumberConfirmed,
                twoFactorEnabled: data.twoFactorEnabled,
                lockoutEnd: data.lockoutEnd,
                lockoutEnabled: data.lockoutEnabled,
                accessFailedCount: data.accessFailedCount
            }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

usersServices.deleteUserService = async (data) => {
    try {
        const query = USERS.deleteUserQuery();
        return await DB.sequelize.query(query, { 
            replacements: { 
                id: data.id
            }
        });
    } catch (err) {
        throw new Error(err.message);
    }
}


module.exports = usersServices;
