import React, { useState, useEffect } from 'react';
import API_URL from '../config';

function Pagos() {
    const [pagos, setPagos] = useState([]);
    const [nuevoPago, setNuevoPago] = useState({ cliente: '', monto: '' });

    // Obtener lista de pagos
    useEffect(() => {
        fetch(`${API_URL}/pagos`)
            .then((response) => response.json())
            .then((data) => setPagos(data))
            .catch((error) => console.error('Error fetching payments:', error));
    }, []);

    // Agregar un nuevo pago
    const agregarPago = () => {
        fetch(`${API_URL}/pagos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoPago),
        })
            .then((response) => response.json())
            .then((data) => setPagos([...pagos, data]))
            .catch((error) => console.error('Error adding payment:', error));
    };

    return (
        <div>
            <h1>Pagos</h1>
            <ul>
                {pagos.map((pago, index) => (
                    <li key={index}>
                        {pago.cliente} - ${pago.monto}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Cliente"
                value={nuevoPago.cliente}
                onChange={(e) => setNuevoPago({ ...nuevoPago, cliente: e.target.value })}
            />
            <input
                type="number"
                placeholder="Monto"
                value={nuevoPago.monto}
                onChange={(e) => setNuevoPago({ ...nuevoPago, monto: e.target.value })}
            />
            <button onClick={agregarPago}>Agregar Pago</button>
        </div>
    );
}

export default Pagos;
