import userSchema from "../models/userSchema.js";
import { generateToken } from "../helpers/userToken.js";
import bcrypt from "bcrypt";
import e from "express";
const authenticate = async (req, res) => {
  let { password, email } = req.body;
  try {
    let user = await userSchema.findOne({ email });
    if(!user){
      return res.send({message:"email no valido", valid:false})
    }
    let valid = await user.verifyPassword(password);

    if (valid) {
      let token = generateToken(user);
      
      user.password = undefined;
      res.send({ user, token, valid:true });
    } else {
      res.send({ 
        message: "Credenciales inválidas",
        valid:false });
    }
  } catch (error) {
    //Esto se ejecuta si no se encuentra un usuario con el email y/o contraseña anteriores.
    res.send(error);
  }
};

export { authenticate };
