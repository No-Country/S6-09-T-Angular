import { saveInBd } from "../helpers/saveInBd.js";
import {changeStatus} from "../helpers/changeStatus.js"
export const coneccionSocket = (io, app) => {
  //configuracion de coneccion
  let connectedUsers = [];

  io.on("connection", (socket) => {
    console.log("Se conecto el usuario" + " " + socket.id);
    connectedUsers.push(socket.id);

    //recepcion para gurdado en bd
    socket.on("message", (message) => {
      console.log(message);
      saveInBd(message.idSala, message);
      console.log("mensaje guardado");
    });

    socket.emit("usuarios-conectados", connectedUsers);
    //Eventos en escucha
    socket.on("chat", (user) => {
      io.emit("mensaje", user); //para emitir a todos los que estan a la escucha es necesario usar io
    });
     let usuario=[]
    socket.on("hola", (hola)=>{
      hola["ids"]=socket.id
      usuario.push(hola)
      
    })
    socket.on("disconnect", () => {
      console.log("El usuario se desconecto");
      changeStatus(usuario[0].id)
      // agregar funcion de cambio estatus online
    });

    io.emit("usuarios-conectados", connectedUsers);
  });
};
