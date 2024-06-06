const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Conectado a la bbdd con exito");
    } catch (error) {
        console.log("Algo ha salido mal");
    }
}

module.exports = { connectDB }