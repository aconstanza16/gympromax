
const express = require('express');
const router = express.Router();

// Sample data for testing
const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombre: 'María López', email: 'maria@example.com', telefono: '987654321' }
];

// Get all clients
router.get('/', (req, res) => {
    res.json(clientes);
});

module.exports = router;
