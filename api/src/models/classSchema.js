import mongoose from "mongoose"
import dotenv from "dotenv"
//import passportLocalMongoose from "passport-local-mongoose"
dotenv.config()

const classSchema = mongoose.Schema({ 
  user_id: { 
    type: String, 
    required: true
  },
  classroom_name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  users: {
    type: String,
    required: false
  },
  other : {
    type: String,
    required: false
  }
})

//classSchema.plugin(passportLocalMongoose)
export default mongoose.model("classSchema", classSchema)