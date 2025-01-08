const express = require('express');
const router = express.Router();

// Sample data
const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombre: 'María López', email: 'maria@example.com', telefono: '987654321' },
];

// Obtener clientes
router.get('/', (req, res) => {
    res.json(clientes);
});

// Agregar cliente
router.post('/', (req, res) => {
    const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    res.json(nuevoCliente);
});

module.exports = router;


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
