const express = require('express');
const router = express.Router();

// Simulación de datos de pagos
const pagos = [
    { id: 1, cliente: 'Juan Pérez', monto: 50, fecha: '2025-01-01' },
    { id: 2, cliente: 'María López', monto: 75, fecha: '2025-01-02' }
];

// Obtener todos los pagos
router.get('/', (req, res) => {
    res.json(pagos);
});

// Agregar un nuevo pago
router.post('/', (req, res) => {
    const nuevoPago = req.body;
    nuevoPago.id = pagos.length + 1;
    pagos.push(nuevoPago);
    res.json(nuevoPago);
});

module.exports = router;

