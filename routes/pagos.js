
const express = require('express');
const router = express.Router();

// Sample data for testing
const pagos = [
    { id: 1, cliente: 'Juan Pérez', monto: 50, fecha: '2025-01-01' },
    { id: 2, cliente: 'María López', monto: 75, fecha: '2025-01-02' }
];

import React, { useState, useEffect } from 'react';
import API_URL from './config';

function Pagos() {
  const [pagos, setPagos] = useState([]);

  // Función para obtener los pagos del backend
  useEffect(() => {
    fetch(`${API_URL}/pagos`)
      .then((response) => response.json())
      .then((data) => setPagos(data))
      .catch((error) => console.error('Error fetching pagos:', error));
  }, []);

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

// Agregar un nuevo pago
  const agregarPago = () => {
    fetch(`${API_URL}/pagos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoPago),
    })
      .then((response) => response.json())
      .then((data) => {
        setPagos([...pagos, data]);
        setNuevoPago({ cliente: '', monto: 0, fecha: '' });
      })
      .catch((error) => console.error('Error adding pago:', error));
  };

export default Pagos;
