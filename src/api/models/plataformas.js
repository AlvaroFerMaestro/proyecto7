const mongoose = require("mongoose");

const plataformaSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    imagen: { type: String, require: true },
    juegos: [{ type: mongoose.Types.ObjectId, ref: "juegos", required: false }],
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
},
  {
    timestamps: true,
    collection: "plataformas"
})

const Plataforma = mongoose.model("plataformas", plataformaSchema, "plataformas");

module.exports = Plataforma;