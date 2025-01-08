const express = require('express');
const router = express.Router();

// Ruta de prueba para asistencia
router.get('/', (req, res) => {
  res.json({ message: 'Ruta de asistencia funcionando' });
});

module.exports = router;
