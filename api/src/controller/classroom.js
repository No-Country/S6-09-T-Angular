import classSchema from "../models/classSchema.js";

const createClassRoom = async (req, res) => {
  try {
    const user = classSchema(req.body);
    user.save().then((data) => res.json(data));
  } catch (error) {
    console.log(error.message);
  }
};

const getClassRoom = async (req, res) => {
  try {
    const { id } = req.params;
    classSchema.find({ user_id: id }).then((data) => res.json(data));
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

export { createClassRoom, getClassRoom, getallClassRoom, deleteClassRoom };
