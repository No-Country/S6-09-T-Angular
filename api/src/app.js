import * as dotenv from "dotenv";
import express, { json } from "express";
import { Server as SocketIO } from "socket.io";
import http from "http";
import { Stream } from "stream";
import routerApi from "./route/index.js";
import { coneccionSocket } from "../src/socket/socket.js";
import connectdb from "./config/db.js";
import cors from "cors"; //enable cors
//import jwtMiddleware from "express-jwt"; //Se iba a usar, pero interfería con el funcionamiento de Socket.io. Podria no interferir si se utiliza en las rutas individuales y no en el app.js

dotenv.config(); //Solo se puso por si las dudas, por si no reconocía el mismo comando en db.js
//const { expressjwt } = jwtMiddleware; 
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new SocketIO(server);


//Config. de express-jwt (todas las peticiones requerirán que se les envíe un token)
/*app.use(expressjwt({ secret: process.env.jwtSecret, algorithms: ["HS256"] }).unless(
  { path: ['/login', '/users', '/'] }), //evita que estas rutas estén protegidas por el token
   function(err, req, res, next){
    res.send(err.message);
   }
);*/

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
