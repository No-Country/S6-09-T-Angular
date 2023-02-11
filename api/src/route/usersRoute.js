import express from 'express';
import { createUser } from '../controller/usersController.js';

const app = express();

//Crear un usuario
app.post("/", createUser);

export default app;