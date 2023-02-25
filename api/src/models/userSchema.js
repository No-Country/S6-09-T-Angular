import mongoose, { Types } from "mongoose";
import mongooseBcrypt from "mongoose-bcrypt";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  online: Boolean,
  email: {
    type: String,
    required: true,
  },
  id_classroom: [
    {
      name: String,
      _id: Types.ObjectId,
    },
  ],
});

userSchema.plugin(mongooseBcrypt); //Agregará un campo encriptado de nombre "password" [a la BD] y además una serie de mètodos.
export default mongoose.model("userSchema", userSchema);
