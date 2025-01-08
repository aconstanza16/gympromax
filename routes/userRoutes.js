// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

// Ruta para registrar un pago
router.post('/:id/pagos', async (req, res) => {
    try {
        const { id } = req.params;
        const { monto } = req.body;
        const usuario = await User.findById(id);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        usuario.pagos.push({ monto });
        await usuario.save();
        res.status(201).json({ message: 'Pago registrado con éxito', pagos: usuario.pagos });
    } catch (error) {
        res.status(500).json({ message: 'Error registrando pago', error });
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
