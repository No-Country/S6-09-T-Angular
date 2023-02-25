import classSchema from "../models/classSchema.js";
import userSchema from "../models/userSchema.js";
import {enviar} from "../helpers/email.js"
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
    let user = await classSchema.find({ user_id: id });
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
    const {idUser}=req.body
    const clase= await classSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      { $push: { users: idUser} }
    );
    let user=await userSchema.findOne({_id:idUser})
    enviar(user,"invitacion")
    res.send({ message: "usuario invitado", valid: true });
  } catch (error) {
    console.log(error.message);
  }
};

export {
  createClassRoom,
  getClassRoom,
  getallClassRoom,
  deleteClassRoom,
  updateClassRoom,
};
