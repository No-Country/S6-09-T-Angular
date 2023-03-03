import { saveInBd } from "../helpers/saveInBd.js";
export const coneccionSocket = (io, app) => {
  //configuracion de coneccion
  let connectedUsers = [];

  io.on("connection", (socket) => {
    console.log("Se conecto el usuario" + " " + socket.id);
    connectedUsers.push(socket.id);

    socket.on("hola", (user) => {
      console.log(user);
    });
    //recepcion para gurdado en bd
    socket.on("message", (message) => {
      console.log(message);
      saveInBd(message.idSala, message);
      console.log("mensaje guardado");
    });

    socket.emit("usuarios-conectados", connectedUsers);
    //Eventos en escucha
    socket.on("chat", (user) => {
      console.log(user);
      io.emit("mensaje", user); //para emitir a todos los que estan a la escucha es necesario usar io
    });

    socket.on("disconnect", (user) => {
      console.log(user);
      console.log("El usuario se desconecto");
      connectedUsers = connectedUsers.filter((userId) => userId !== socket.id);
      // enviar la lista de usuarios conectados actualizada a todos los clientes
      io.emit("usuarios-conectados", connectedUsers);
    });

    io.emit("usuarios-conectados", connectedUsers);
  });
};
