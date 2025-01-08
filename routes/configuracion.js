const express = require('express');
const router = express.Router();

// Simulación de configuración inicial
let configuraciones = {
    planesMembresia: [
        { id: 1, nombre: 'Básico', precio: 50 },
        { id: 2, nombre: 'Premium', precio: 100 },
    ],
    dispositivosAsistencia: [
        { id: 1, nombre: 'Dispositivo Entrada', direccion: '192.168.1.100' },
        { id: 2, nombre: 'Dispositivo Salida', direccion: '192.168.1.101' },
    ]
};

// Obtener todas las configuraciones
router.get('/', (req, res) => {
    res.json(configuraciones);
});

// Actualizar configuración de planes de membresía
router.put('/planes', (req, res) => {
    const nuevosPlanes = req.body.planesMembresia;
    configuraciones.planesMembresia = nuevosPlanes;
    res.json({ mensaje: 'Planes de membresía actualizados', planesMembresia: nuevosPlanes });
});

// Actualizar configuración de dispositivos de asistencia
router.put('/dispositivos', (req, res) => {
    const nuevosDispositivos = req.body.dispositivosAsistencia;
    configuraciones.dispositivosAsistencia = nuevosDispositivos;
    res.json({ mensaje: 'Dispositivos de asistencia actualizados', dispositivosAsistencia: nuevosDispositivos });
});

module.exports = router;
