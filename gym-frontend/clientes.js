// clientes.js - Gestión de clientes en el frontend

// Cambia la URL base a la del backend en Railway
const apiBaseUrl = "https://gympromax-production.up.railway.app/clientes";

// Crear cliente
async function createCliente(cliente) {
    try {
        const response = await fetch(`${apiBaseUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Cliente creado:', data);
    } catch (error) {
        console.error('Error creando cliente:', error);
    }
}

// Registrar un pago
async function registrarPago(clienteId, monto) {
    try {
        const response = await fetch(`${apiBaseUrl}/${clienteId}/pagos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ monto }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Pago registrado:', data);
    } catch (error) {
        console.error('Error registrando pago:', error);
    }
}

// Obtener clientes
async function getClientes() {
    try {
        const response = await fetch(apiBaseUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Clientes:', data);
    } catch (error) {
        console.error('Error obteniendo clientes:', error);
    }
}

// Ejemplo de uso
document.getElementById('crearClienteBtn').addEventListener('click', () => {
    const nuevoCliente = {
        nombre: "Juan Perez",
        email: "juan.perez@example.com",
    };

    createCliente(nuevoCliente);
});

document.getElementById('registrarPagoBtn').addEventListener('click', () => {
    const clienteId = "id-del-cliente"; // Reemplazar con el ID real
    const monto = 100; // Reemplazar con el monto real

    registrarPago(clienteId, monto);
});
