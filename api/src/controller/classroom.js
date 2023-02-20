import classSchema from "../models/classSchema.js";

const createClassRoom = async (req, res) => {
  try {
    const user = classSchema(req.body);
    console.log(user)
    user.save().then((data) => res.json(data));
  } catch (error) {
    console.log(error.message);
  }
};

const getClassRoom = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let user = await classSchema.find({ user_id: id })
    res.send(user)

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
    res.send(eliminar);
    console.log("Eliminado");
  } catch (error) {
    console.log(error.message);
    res.send("Classroom no existe");
  }
};

const updateClassRoom = async (req, res) => {
  try {
    const {id}= req.params
    console.log("ID es: " + id);
    const message = req.body.message
    const user_chat = req.body.user_chat
    console.log("User_chat: " + user_chat);
    console.log("Mensaje: " + message);
    const user = await classSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      { $push: { "other" : {"user": user_chat, "message": message}  }}
    );
    res.send("Mensaje enviado")
  } catch (error) {
    console.log(error.message);
  }
};

export { createClassRoom, getClassRoom, getallClassRoom, deleteClassRoom,updateClassRoom };
