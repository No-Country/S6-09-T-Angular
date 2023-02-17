let boton = document.getElementById("zumbido");
let users= document.getElementById("users")
const audio = new Audio("../audio/1.mp3");
boton.addEventListener("click", () => {
  console.log("hola mundo");
  audio.play();
  window.navigator.vibrate([100]);
});

const datos=async()=>{
  let url="http://localhost:3000/classroom/all"
  let datos= await fetch(url)
  return await datos.json()
}

const pintarUsers=async()=>{
  let user=await datos()
  console.log(user);
  user.forEach(element => {
    let tpl=`
  id=${element.user_id}
  user=${element.classroom_name} 
  <br>
  <br>

  `  
  users.innerHTML+=tpl
  });
  
  

}
 pintarUsers()

