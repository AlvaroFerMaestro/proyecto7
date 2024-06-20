
const { populate } = require("../models/juegos");
const Plataforma = require("../models/plataformas");
const User = require("../models/users");




const getPlataformas = async (req, res, next) =>{
    try {
        const plataforma = await Plataforma.find().populate("juegos").populate("usuario");
        return res.status(200).json(plataforma)
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getPlataformaById = async (req, res, next) =>{
    try {
        const  { id } = req.params;
        const plataforma = await Plataforma.findById(id).populate("juegos").populate("usuario"); 
        return rest.status(200).json(plataforma)
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const postPlataforma = async (req, res, next) => {
    try {
        const { nombre, descripcion, usuarioId } = req.body;

        const newPlataforma = new Plataforma({
            nombre,
            descripcion,
            usuario: usuarioId
        });

        const plataformaSaved = await newPlataforma.save();

        const usuario = await Usuario.findById(usuarioId);
        usuario.plataformas.push(plataformaSaved._id);
        await usuario.save();

        return res.status(201).json(plataformaSaved);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const putPlataforma = async (req, res, next) => {
    try {
        const { id } = req.params;
        const oldPlataforma = await Plataforma.findById(id);
        const newPlataforma = new Plataforma(req.body);
        newPlataforma._id = id;
        newPlataforma.juegos = [...oldPlataforma.juegos, ...req.body.juegos];
        newPlataforma.usuario = oldPlataforma.usuario;

        const plataformaUpdate = await Plataforma.findByIdAndUpdate(id, newPlataforma, {
            new: true
        });

        return res.status(200).json(plataformaUpdate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const deletePlataforma = async (req, res, next) => {
    try {
        const { id } = req.params;
        const plataformaDeleted = await Plataforma.findByIdAndDelete(id);

        const usuario = await Usuario.findById(plataformaDeleted.usuario);
        usuario.plataformas.pull(plataformaDeleted._id);
        await usuario.save();

        return res.status(200).json(plataformaDeleted);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}


module.exports = {
    getPlataformas,
    getPlataformaById,
    postPlataforma,
    putPlataforma,
    deletePlataforma
}