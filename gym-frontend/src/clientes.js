import React, { useState, useEffect } from 'react';
import API_URL from '../config';

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [nuevoCliente, setNuevoCliente] = useState('');

    // Obtener lista de clientes
    useEffect(() => {
        fetch(`${API_URL}/clientes`)
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error('Error fetching clients:', error));
    }, []);

    // Agregar un nuevo cliente
    const agregarCliente = () => {
        fetch(`${API_URL}/clientes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nuevoCliente }),
        })
            .then((response) => response.json())
            .then((data) => setClientes([...clientes, data]))
            .catch((error) => console.error('Error adding client:', error));
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
                placeholder="Nombre del cliente"
            />
            <button onClick={agregarCliente}>Agregar Cliente</button>
        </div>
    );
}

export default Clientes;
