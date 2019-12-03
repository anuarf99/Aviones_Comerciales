const mongoose = require('mongoose');
const { Schema } = mongoose;

const AvionSchema = new Schema({
    referencia: String,
    capacidad_de_pasajeros: Number,
    tripulacion_tecnica: String,
    envergadura: String,
    velocidad_maxima: String,
    longitud: String,
    altura: String,
    peso_maximo_de_despegue: String,
    alcance_maximo: String,
    altitud_maxima_de_vuelo: String,
    pista_minima_para_despegue: String,
    aerolíneas_que_lo_usan: String,
    motores_usados: String,
    fecha_de_introducido: String,
    fecha_primer_vuelo: String,
    fabricante: String,
    geometría_descriptiva: String

});

var Avion = mongoose.model("Avion", AvionSchema);
module.exports = Avion;