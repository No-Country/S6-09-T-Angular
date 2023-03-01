import express from "express";
import { passworReset, passwordUpdate } from "../controller/passwordReset.js";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser,
} from "../controller/usersController.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesUser } from "../validator/validationUser.js";
import { rulesUserupdate } from "../validator/validationUpdateUser.js";

const app = express();

//Crear un usuario y su token
app.post("/", rulesUser, validationGeneral, createUser);

//get allUser
app.get("/", getUsers);
//get usuario
app.get("/:id", rulesUserupdate, validationGeneral, getUser);
//Delete usuario
app.patch("/:id", updateUser);
//Update usuario
app.delete("/:id", rulesUserupdate, validationGeneral, deleteUser);
//recuperacion de contraseña
app.post("/passworReset", passworReset);



export default app;





//No importa que antos principios o reglas te digan que tiene un hombre, si pasa una mujer linda el hombre volteará.
//Atte.: Miguel Guerrero.
