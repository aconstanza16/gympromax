import React, { useState, useEffect } from 'react';
import API_URL from './config';

function Pagos() {
  const [pagos, setPagos] = useState([]);
  const [nuevoPago, setNuevoPago] = useState({ cliente: '', monto: 0, fecha: '' });

  // Obtener los pagos del backend
  useEffect(() => {
    fetch(`${API_URL}/pagos`)
      .then((response) => response.json())
      .then((data) => setPagos(data))
      .catch((error) => console.error('Error fetching pagos:', error));
  }, []);

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
      <input
        type="text"
        value={nuevoPago.cliente}
        onChange={(e) => setNuevoPago({ ...nuevoPago, cliente: e.target.value })}
        placeholder="Cliente"
      />
      <input
        type="number"
        value={nuevoPago.monto}
        onChange={(e) => setNuevoPago({ ...nuevoPago, monto: e.target.value })}
        placeholder="Monto"
      />
      <input
        type="date"
        value={nuevoPago.fecha}
        onChange={(e) => setNuevoPago({ ...nuevoPago, fecha: e.target.value })}
      />
      <button onClick={agregarPago}>Agregar Pago</button>
    </div>
  );
}

export default Pagos;
