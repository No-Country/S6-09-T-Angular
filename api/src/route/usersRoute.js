import express from 'express';
import { createUser } from '../controller/usersController.js';
import { body, validationResult } from'express-validator'
import {validationGeneral} from"../validator/validationGeneral.js"
import { rulesUser } from '../validator/validationUser.js';
const app = express();


//Crear un usuario
app.post("/",rulesUser,validationGeneral ,createUser); 

export default app;

//No importa que antos principios o reglas te digan que tiene un hombre, si pasa una mujer linda el hombre volteará.
//Atte.: Miguel Guerrero.