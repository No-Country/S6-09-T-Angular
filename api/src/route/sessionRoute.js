import express from 'express';
import { generateToken, sendToken } from '../controller/helpers.js';
import { authenticate } from '../controller/sessionController.js';

const app = express();

//Iniciar sesión
app.post('/', authenticate, generateToken, sendToken);

export default app;