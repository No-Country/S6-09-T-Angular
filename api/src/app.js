import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const app = express();
const port = 3000;
import { Server as SocketIO } from "socket.io";
import http from "http";
import { Stream } from "stream";
import routerApi from "./route/index.js";
const server = http.createServer(app);
const io = new SocketIO(server);
import { coneccionSocket } from "../src/socket/socket.js";
import connectdb from "./config/db.js";

//configuracion de archivos staticos
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configuracion de cors

//rutas de la api
routerApi(app);
//conecciones

coneccionSocket(io, app);
server.listen(port, () => {
  console.log("Server corriendo en " + port);
});
