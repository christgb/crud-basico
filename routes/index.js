const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/getUserController');
const putUserController = require('../controllers/putUserController');
const deleteUserController = require('../controllers/deleteUserController');
const postUserController = require('../controllers/postUserController');

router.use(express.urlencoded({ extended: true }));

// Ruta para actualizar un usuario
router.get('/usersUpdate/:id', putUserController.getPut);
router.patch('/usersUpdate/:id', putUserController.usersPatch);

// Ruta para eliminar un usuario
router.delete('/users/:id', deleteUserController.usersDelete);

// Ruta para crear un usuario
router.post('/users', postUserController.usersPost);

// Ruta para obtener la lista de usuarios
router.get('/users', getUserController.getUsersJson);

module.exports = router;
