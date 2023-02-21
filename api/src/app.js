import * as dotenv from "dotenv";
import express, { json } from "express";
import { Server as SocketIO } from "socket.io";
import http from "http";
import { Stream } from "stream";
import routerApi from "./route/index.js";
import { coneccionSocket } from "../src/socket/socket.js";
import connectdb from "./config/db.js";
import cors from "cors"; //enable cors
import jwtMiddleware from "express-jwt";

const { expressjwt } = jwtMiddleware;
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new SocketIO(server);

//Config. de express-jwt (todas las peticiones requerirán que se les envíe un token)
app.use(expressjwt({ secret: process.env.jwtSecret, algorithms: ["HS256"] }).unless(
  { path: ['/login', '/users'] }) //evita que estas rutas estén protegidas por el token
);

//configuracion de archivos staticos
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configuracion de cors
app.use(cors());
//rutas de la api
routerApi(app);
//conexiones
coneccionSocket(io, app);

//Controlador de errores global (también funciona para express-jwt, de hecho fué implementado para controlar el error -al ingresar a una ruta sin token- de esta librería)
app.use((err, req, res, next) => {
  res.send(err.message);
});


server.listen(port, () => {
  console.log("Server corriendo en " + port);
});
