let boton = document.getElementById("zumbido");

boton.addEventListener("click", () => {
  console.log("hola mundo");
  window.navigator.vibrate(1000);
});
