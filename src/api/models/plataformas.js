const mongoose = require("mongoose");

const plataformaSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    imagen: { type: String, require: true },
    juegos: [{ type: mongoose.Types.ObjectId, ref: "juegos", required: false }]
},
  {
    timestamps: true,
    collection: "plataformas"
})

const Plataforma = mongoose.model("plataformas", plataformaSchema, "plataformas");

module.exports = Plataforma;