let boton = document.getElementById("zumbido");
let salas= document.getElementById("salas")
let llamarSalas=document.getElementById("consegui-salas")
let login=document.getElementById("login")
let enviar=document.getElementById("enviar")
const audio = new Audio("../audio/1.mp3");
boton.addEventListener("click", () => {
  audio.play();
  window.navigator.vibrate([100]);
});

//Estructura opcional de peticiones
llamarSalas.addEventListener("click",(e)=>{
    e.preventDefault()

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
      salas.innerHTML+=tpl
      });
      
      
    
    }
     pintarUsers()

})

login.addEventListener("submit",async(e)=>{
  e.preventDefault()
  let password=e.target.password.value
  let email =e.target.name.value
  let data={password,email}
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    };
  let token=await fetch("http://localhost:3000/login",options )
console.log(await token.json());

})






