
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete CORS
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Habilitar CORS para permitir solicitudes desde Netlify
app.use(cors());

// Connect to MongoDB using Railway-provided URL
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Routes
app.use('/clientes', require('./routes/clientes'));
app.use('/pagos', require('./routes/pagos'));
app.use('/asistencia', require('./routes/asistencia'));
app.use('/reportes', require('./routes/reportes'));
app.use('/configuracion', require('./routes/configuracion'));

// Start server
app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
