// server.js - Backend principal
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
const mongoURI = "aconstanza:jQoxsIqec82kvZBe@cluster0.nx09j.mongodb.net/?retryWrites=true&w=majority&appName=Cluter0";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Asegurarse de que la carpeta 'routes/userRoutes.js' existe y está configurada correctamente.

    
