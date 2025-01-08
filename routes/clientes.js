
const express = require('express');
const router = express.Router();

// Sample data for testing
const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombre: 'María López', email: 'maria@example.com', telefono: '987654321' }
];

import React, { useState, useEffect } from 'react';
import API_URL from './config';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  // Función para obtener los clientes del backend
  useEffect(() => {
    fetch(`${API_URL}/clientes`)
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error('Error fetching clientes:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;


// Get all clients
router.get('/', (req, res) => {
    res.json(clientes);
});

module.exports = router;
