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

const app = express();
const port = 3001;
const server = http.createServer(app);
const io = new SocketIO(server, {
  cors: {
    origin: "http://localhost:4200",//"https://s6-09-t-angular.vercel.app/", ,
    methods: ["GET", "POST"],
  },
});

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

server.listen(port, () => {
  console.log("Server corriendo en " + port);
});
