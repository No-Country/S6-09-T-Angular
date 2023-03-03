import classSchema from "../models/classSchema.js";

const saveInBd = async (id, message) => {
  console.log(id, user.message);
  try {
    const user = await classSchema.findByIdAndUpdate(
      {
        _id: message.idSala,
      },
      { $push: { other: { user: message.user, message: message.message } } }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export { saveInBd };
