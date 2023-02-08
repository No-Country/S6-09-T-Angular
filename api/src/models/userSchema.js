import mongoose from "mongoose"
import dotenv from "dotenv"
import passportLocalMongoose from "passport-local-mongoose"
dotenv.config()

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id_classroom: {
    type: String,
    required: false,
  }
})

userSchema.plugin(passportLocalMongoose)
export default mongoose.model("user", userSchema)