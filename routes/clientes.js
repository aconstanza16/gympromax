const express = require('express');
const router = express.Router();

// Sample data
const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombre: 'María López', email: 'maria@example.com', telefono: '987654321' },
];

// Obtener clientes
router.get('/', (req, res) => {
    res.json(clientes);
});

// Agregar cliente
router.post('/', (req, res) => {
    const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    res.json(nuevoCliente);
});

module.exports = router;

 
