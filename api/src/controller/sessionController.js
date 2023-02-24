import userSchema from "../models/userSchema.js";
import { generateToken } from "../helpers/userToken.js";
import bcrypt from "bcrypt";
import e from "express";
const authenticate = async (req, res) => {
  let { password, email } = req.body;

  try {
    let user = await userSchema.findOne({ email });
    let valid = await user.verifyPassword(password);

    if (valid) {
      let token = generateToken(user);
      user.password = undefined;
      res.send({ user, token });
    } else {
      res.send({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    //Esto se ejecuta si no se encuentra un usuario con el email y/o contraseña anteriores.
    res.send(error);
  }
};

export { authenticate };
