import {} from "../models/userSchema.js"
const changeStatus= async (id)=>{
    let updateuser = await userSchema.findByIdAndUpdate(
        { _id: id },
        { online: false }
      );
}

export {changeStatus}