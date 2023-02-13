import express from 'express';
import { createUser } from '../controller/usersController.js';

const app = express();

//Crear un usuario
app.post("/", createUser); 

export default app;

//No importa que antos principios o reglas te digan que tiene un hombre, si pasa una mujer linda el hombre volteará.
//Atte.: Miguel Guerrero.