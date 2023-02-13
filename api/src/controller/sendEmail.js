import {senEmail}  from "../helpers/email.js"

const sendE=(req,res)=>{
    let user=req.body
    senEmail(user,"bienvenida")
 res.send("hola")
}


export {sendE}