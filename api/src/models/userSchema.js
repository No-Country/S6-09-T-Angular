import mongoose from "mongoose"
//import passportLocalMongoose from "passport-local-mongoose"


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

//userSchema.plugin(passportLocalMongoose)
export default mongoose.model("user", userSchema)