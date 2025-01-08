
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

  return (
    <div>
      <h1>Lista de Pagos</h1>
      <ul>
        {pagos.map((pago) => (
          <li key={pago.id}>
            Cliente: {pago.cliente}, Monto: ${pago.monto}, Fecha: {pago.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagos;


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
