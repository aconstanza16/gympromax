const express = require('express');
const router = express.Router();

// Ruta de prueba para configuración
router.get('/', (req, res) => {
  res.json({ message: 'Ruta de configuración funcionando' });
});

module.exports = router;
