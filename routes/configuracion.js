const express = require('express');
const router = express.Router();
const API_URL = 'https://gympromax-production.up.railway.app';
export default API_URL;
// Ruta de prueba para configuración
router.get('/', (req, res) => {
  res.json({ message: 'Ruta de configuración funcionando' });
});

module.exports = router;
