const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

router
    .get('/getAllUsers', usersControllers.getUsersController)
    .post('/getUser', usersControllers.getUserController)
    .post('/addUser', usersControllers.addUserController)
    .put('/updateUser', usersControllers.updateUserController)
    .delete('/deleteUser', usersControllers.deleteUserController);

module.exports = router;
