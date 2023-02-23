import userSchema from "../models/userSchema.js";
import { enviar } from "../helpers/email.js";
import { generateToken } from "../helpers/userToken.js";
import { query } from "express";

//Crear usuario
const createUser = async (req, res) => {
  let { name, password, email } = req.body;
  try {
    let userExist = await userSchema.findOne({ email });
    //comprobando email para no repetir en base de datos
    if (userExist) {
      return res.send({
        message: "El correo electronico ya existe en la base de datos",
        valid: false,
      });
    }
    //creacion del usuario
    let user = new userSchema({ name, password, email });
    user.save();

    let token = generateToken(user);
    user.password = undefined;
    let userData = {
      user: user,
      jwt: token,
    };
    //correo de viendvenida
    enviar(user, "bienvenida");
    res.send({ user: userData, valid: true });
  } catch (error) {
    console.log(error);
  }
};

//trae usuarios
const getUsers = async (req, res) => {
  let users = await userSchema.find({}).select("-password");

  res.send(users);
};
//traer un usuario
const getUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await userSchema.findById({ _id: id }).select("-password");
    if (!user) {
      return res.send({ message: "Usuario no existe" });
    }

    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};

//Update usuario
const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, password, email } = req.body;

    const updateUser = await userSchema.findOneAndUpdate(
      { _id: id },
      { name, password, email }
    );

    if (!updateUser) {
      return res.send({ message: "El usuario no existe" });
    }
    let user = await userSchema.findById({ _id: id });
    user.password = undefined;

    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await userSchema.findOne({ _id: id });

    if (!user) {
      return res.send({ message: "El usuario no existe" });
    }

    const deleteUser = await userSchema.findOneAndDelete({ _id: id });

    res.send({ message: "Usuario eliminado" });
  } catch (error) {
    console.log(error.message);
  }
};
//Ingresar Usuario

//module.exports={create}
export { createUser, getUsers, updateUser, deleteUser, getUser };
