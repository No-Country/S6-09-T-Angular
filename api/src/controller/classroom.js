import classSchema from "../models/classSchema.js";
import userSchema from "../models/userSchema.js";
import { enviar } from "../helpers/email.js";
const createClassRoom = async (req, res) => {
  try {
    const user = classSchema(req.body);
    console.log(user);
    user.save().then((data) => res.json({ class: data, valid: true }));
  } catch (error) {
    console.log(error.message);
  }
};

const getClassRoom = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let user = await classSchema.find({ _id: id });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};

const getallClassRoom = async (req, res) => {
  try {
    let user = await classSchema.find();
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send("Classroom no existe");
  }
};

const deleteClassRoom = async (req, res) => {
  const { id } = req.params;
  try {
    let eliminar = await classSchema.findByIdAndDelete({ _id: id });
    res.send({ eliminado: eliminar, valid: true });
    console.log("Eliminado");
  } catch (error) {
    console.log(error.message);
    res.send("Classroom no existe");
  }
};

const updateClassRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { idUser } = req.body;
    const clase = await classSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      { $push: { users: idUser } }
    );
    let user = await userSchema.findOne({ _id: idUser });
    enviar(user, "invitacion");
    res.send({ message: "usuario invitado", valid: true });
  } catch (error) {
    console.log(error.message);
  }
};

const addUser = async (req, res) => {
  let { user } = req.body;
  let { id } = req.params;
  try {
    //Comprueba que el usuario no este en el grupo
    const valid = await classSchema.findByIdAndUpdate({ _id: id });
    const exist = valid.users.filter((invitados) => invitados.includes(user));
    console.log(exist.length);
    if (exist.length <= 0) {
      const clase = await classSchema.findByIdAndUpdate(
        {
          _id: id,
        },
        { $push: { users: user } }
      );
      //gestionar correo para el user

      return res.send({ valid: true });
    }

    res.send({ valid: false, user: "el usuario ya esta en el grupo" });
  } catch (error) {
    console.log(error.message);
    res.send({ valid: false, user: "No se puede invitar al usuario" });
  }
};

const deleteUser = async (req, res) => {
  let { user } = req.body;
  let { id } = req.params;
  try {
    const clase = await classSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      { $pull: { users: user } }
    );

    res.send({ Valid: true, user: "el usuario fue eliminado de la sala" });
  } catch (error) {
    console.log(error);
    res.send({ valid: false, user: "usuario no existe en el aula" });
  }
};
export {
  deleteUser,
  addUser,
  createClassRoom,
  getClassRoom,
  getallClassRoom,
  deleteClassRoom,
  updateClassRoom,
};
