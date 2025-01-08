
const express = require('express');
const router = express.Router();

// Sample data for testing
const pagos = [
    { id: 1, cliente: 'Juan Pérez', monto: 50, fecha: '2025-01-01' },
    { id: 2, cliente: 'María López', monto: 75, fecha: '2025-01-02' }
];

// Get all payments
router.get('/', (req, res) => {
    res.json(pagos);
});

// Add a new payment
router.post('/', (req, res) => {
    const newPayment = req.body;
    pagos.push(newPayment);
    res.json(newPayment);
});

module.exports = router;
