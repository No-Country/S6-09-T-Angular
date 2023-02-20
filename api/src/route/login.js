import express from "express";
const app = express();
import { authenticate } from "../controller/sessionController.js";
//Iniciar sesión
app.post("/", authenticate);

export default app;
