let boton = document.getElementById("zumbido");
const audio = new Audio("../audio/1.mp3");
boton.addEventListener("click", () => {
  console.log("hola mundo");
  audio.play();
  window.navigator.vibrate([100]);
});
