let socket = io();
let form = document.querySelector("form");
let input = document.getElementById("mensaje");
let nombre = document.getElementById("nombre");
let ul = document.querySelector("ul");
//recibe el mensaje

socket.on("mensaje", (user) => {
  console.log(user);
  ul.innerHTML += ` <h3>${user.nombre}: ${user.msg}<h3/>`;
});

//envia el mensaje
form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("chat", {
    id: socket.id,
    nombre: nombre.value,
    msg: input.value,
  });

  input.value = "";
});

//escucha al usuario

socket.on("usuarios-conectados", (connectedUsers) => {
  console.log(connectedUsers);
});
