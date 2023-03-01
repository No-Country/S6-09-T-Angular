import mongoose from "mongoose";
import dotenv from "dotenv";
//import passportLocalMongoose from "passport-local-mongoose"
dotenv.config();

const fileSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

//fileSchema.plugin(passportLocalMongoose)
export default mongoose.model("fileSchema", fileSchema);
