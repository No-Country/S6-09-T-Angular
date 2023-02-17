import classSchema from "../models/classSchema.js"

const saveInBd = async (id, message) => {
    try {
     console.log(id, message);
    
      const user = await classSchema.findByIdAndUpdate(
        {
          _id: id,
        },
        { $push: { other: message } }
      );
      
    } catch (error) {
      console.log(error.message);
    }
  };


export {saveInBd}