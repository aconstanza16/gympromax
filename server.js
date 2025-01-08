
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use('/clientes', require('./routes/clientes'));
app.use('/pagos', require('./routes/pagos'));
app.use('/reportes', require('./routes/reportes'));
app.use('/asistencia', require('./routes/asistencia'));
app.use('/configuracion', require('./routes/configuracion'));

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

