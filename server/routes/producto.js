const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/producto', (req, res) => {
        respuesta = {
         error: true,
         codigo: 3000,
         mensaje: 'Puerto'
        };

// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('/producto', (req, res) =>{
    let body = req.body;
    let Producto = new Producto ({
        nombre: body.nombre,
        Precio: body.Precio,
        Creado_en: body.Creado_en
    })
});

Producto.save((err, Producto) => {
    if (err){
        res.status(3000).json({
            ok: false,
            err
        })
    }
    res.json
})
