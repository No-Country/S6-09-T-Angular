import mongoose from "mongoose"
import dotenv from "dotenv"
import passportLocalMongoose from "passport-local-mongoose"
import mongooseBcrypt from 'mongoose-bcrypt';

dotenv.config()

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id_classroom: {
    type: String,
    required: false,
  }
})

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(mongooseBcrypt); //Agregará un campo encriptado de nombre "password" [a la BD] y además una serie de mètodos.
export default mongoose.model("user", userSchema);