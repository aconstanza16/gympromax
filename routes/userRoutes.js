// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Asegúrate de que el modelo de usuario exista

// Ruta para crear un usuario
router.post('/create', async (req, res) => {
    try {
        const { nombre, email } = req.body;
        const nuevoUsuario = new User({ nombre, email });
        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario creado con éxito', usuario: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ message: 'Error creando usuario', error });
    }
});

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await User.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error obteniendo usuarios', error });
    }
});

module.exports = router;
