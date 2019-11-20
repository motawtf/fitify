// Dependencies
const express = require('express');
const app = express();

// Keys
const { PORT } = require('./config/keys');

// Routes
const usuariosRouter = require('./routes/usuarios');
const rutinasRouter = require('./routes/rutinas');

// DB connection
require('./config/db');

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/usuarios', usuariosRouter);
app.use('/api/rutinas', rutinasRouter);
app.use((req, res) => {
  let err = new Error('Not Found');
    res.status(404).json({
        status: 404,
        message: err.message,
        name: err.name
    });
})

app.listen(PORT, () => {
  console.log(`[INFO] Timefit lanzado en el puerto ${PORT}`);
});