
const apiBaseUrl = "https://gympromax-production.up.railway.app/api/users";

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
