import classSchema from "../models/classSchema.js";

const deleted = async (req, res) => {
  const { id } = req.params;
  try {
    let eliminar = await classSchema.findByIdAndDelete({ _id: id });

    res.send(eliminar);
  } catch (error) {
    console.log(error.message);
    res.send("class no existe");
  }
};

const getClassRoom = async (req, res) => {
  try {
    let user = await classSchema.find();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};

export { deleted, getClassRoom };
