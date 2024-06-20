const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const buscarUsuario = async (userName) => {
    const user = await User.findOne({ userName });
    return user;
}

const updateUserRole = async (req, res, next) => {
    const { userId } = req.params;
    const { role } = req.body;
  
    try {
      const userToUpdate = await User.findById(userId);
  
      if (!userToUpdate) {
        return res.status(404).json("Usuario no encontrado");
      }
  
      if (req.user.role !== "admin") {
        return res.status(403).json("No tienes permiso para realizar esta acción");
      }
  
      userToUpdate.role = role;
      await userToUpdate.save();
  
      return res.status(200).json("Rol de usuario actualizado correctamente", { user: userToUpdate });
    } catch (error) {
      console.error("Error al actualizar rol de usuario:", error);
      return res.status(500).json("Error en el servidor");
    }
  };
  

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const register = async (req, res, next) => {
    try {

        const newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            rol: "user"
        });

        const duplicateUser = await buscarUsuario(req.body.userName);

        if (duplicateUser) {
            return res.status(400).json("Nombre usuario ya existente");
        }

        const userSaved = await newUser.save();
        return res.status(201).json(userSaved);

    } catch (error) {
        return res.status(400).json(error);
    }
}

const login = async (req, res, next) => {
    try {
        
        const user = await buscarUsuario(req.body.userName);

        if (!user) {
            return res.status(400).json("Usuario no existente");
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = generateSign(user._id);
            return res.status(200).json({ user, token });
        } else {
            return res.status(400).json("La contraseña es incorrecta");
        }

    } catch (error) {
        return res.status(400).json(error);
    }
}

const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const userToDelete = await User.findById(userId);

        if (!userToDelete) {
            return res.status(404).json("Usuario no encontrado");
        }

        const requesterId = req.user.id;
        if (requesterId === userId || req.user.role === 'admin') {
            await User.findByIdAndDelete(userId);
            return res.status(200).json("Usuario eliminado correctamente");
        } else {
            return res.status(404).json("No tienes permiso para realizar esta acción");
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        return res.status(404).json("Error en el servidor");
    }
};

module.exports = { getUsers, register, login, deleteUser, updateUserRole }