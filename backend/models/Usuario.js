const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: { 
        type: String, 
        unique: true 
    },
    nombre: String,
    genero: String,
    ubicacion: String,
    imgURL: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);