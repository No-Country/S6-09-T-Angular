import express from "express";
import { createUser } from "../controller/usersController.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesUser } from "../validator/validationUser.js";

const app = express();

//Crear un usuario y su token
app.post("/", rulesUser, validationGeneral, createUser);

//Login del usuario

//Delete usuario

//Update usuario

export default app;

//No importa que antos principios o reglas te digan que tiene un hombre, si pasa una mujer linda el hombre volteará.
//Atte.: Miguel Guerrero.
