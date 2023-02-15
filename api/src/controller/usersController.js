import userSchema from "../models/userSchema.js";

import { enviar } from "../helpers/email.js";
import { generateToken } from "../helpers/userToken.js";
//Crear usuario
const createUser = async (req, res) => {
  let { name, password, email } = req.body;

  try {
    let user = new userSchema({ name, password, email });

    let token = generateToken(user);
    user.password = undefined;
    let userData = {
      user: user,
      jwt: token,
    };
    enviar(user, "bienvenida");
    res.send(userData);
  } catch (error) {
    console.log(error);
  }
};

//Update usuario

//Eliminar usuario (solo si es administrador de la plataforma Classemote)

//Ingresar Usuario

//module.exports={create}
export { createUser };
