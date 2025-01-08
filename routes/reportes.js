const express = require('express');
const router = express.Router();

// Ruta de prueba para reportes
router.get('/', (req, res) => {
  res.json({ message: 'Ruta de reportes funcionando' });
});

module.exports = router;
