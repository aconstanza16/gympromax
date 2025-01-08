import React, { useState, useEffect } from 'react';
import API_URL from './config';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState('');

  // Obtener los clientes del backend
  useEffect(() => {
    fetch(`${API_URL}/clientes`)
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error('Error fetching clientes:', error));
  }, []);

  // Agregar un nuevo cliente
  const agregarCliente = () => {
    fetch(`${API_URL}/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre: nuevoCliente }),
    })
      .then((response) => response.json())
      .then((data) => {
        setClientes([...clientes, data]);
        setNuevoCliente('');
      })
      .catch((error) => console.error('Error adding cliente:', error));
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nombre}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevoCliente}
        onChange={(e) => setNuevoCliente(e.target.value)}
        placeholder="Nuevo Cliente"
      />
      <button onClick={agregarCliente}>Agregar Cliente</button>
    </div>
  );
}

export default Clientes;
