const mongoose = require('mongoose');

let Schema = mongoose.Schema;
Producto = new Producto

//Definir el esquema para el modelo Producto (Valor 5 puntos)
let Producto = new Schema ({
    nombre : {
    type: String,
    required: [true,'El nombre es necesario']
},

    Precio:{
    type: Number,
    required: [true,'El precio es necesario']
},

    Creado_en: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Producto', usuarioSchema);