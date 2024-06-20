const { isAdmin } = require("../../middlewares/auth");
const { getUsers, register, login, updateUserRole } = require("../controllers/users");

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAdmin], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:userId/rol", updateUserRole);

module.exports = usersRoutes;