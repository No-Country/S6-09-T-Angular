import userSchema from "../models/userSchema.js";
import { enviar } from "../helpers/email.js";
import { resetPasswordToken } from "../helpers/userToken.js";
import jwt from "jsonwebtoken";

const passworReset = async (req, res) => {
  let { email } = req.body;
  try {
    let user = await userSchema.findOne({ email: email });
    if (user) {
      let token = resetPasswordToken(user);
      enviar(user, "resetPs", token);
      return res.send({ valid: true, user: "Email de recuperacion enviado" });
    }
    res.send({ valid: false, user: "No existe el usuario" });
  } catch (error) {
    console.log(error.message);
    res.send({ valid: false, user: "No existe el usuario" });
  }
};

export { passworReset };
