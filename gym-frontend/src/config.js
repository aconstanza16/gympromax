import React, { useState, useEffect } from 'react';
import API_URL from '../config';

function Clientes() {
    const [clientes, setClientes] = useState([]);

    // Obtener clientes
    useEffect(() => {
        fetch(`${API_URL}/clientes`)
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error('Error fetching clients:', error));
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
