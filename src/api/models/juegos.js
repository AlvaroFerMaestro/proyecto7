const mongoose = require("mongoose");

const juegoSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    imagen: { type: String, require: true },
    precio: { type: Number, require: true },
    categoria: { type: String, require: true, 
    enum:[
    "puzzle",
    "aventura",
    "miedo",
    "coches",
    "deportes",
    "paltaformas"],
   },
},
  {
    timestamps: true,
    collection: "juegos"
})

const Juego = mongoose.model("juegos", juegoSchema, "juegos");

module.exports = Juego;