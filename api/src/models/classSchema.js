import mongoose from "mongoose";
import dotenv from "dotenv";
//import passportLocalMongoose from "passport-local-mongoose"
dotenv.config();

const classSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    classroom_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    aula: {
      type: String,
      required: false,
    },
    users: [
      {
        type: String,
        required: false,
      },
    ],
    other: [
      {
        user: String,
        message: {
          type: String,
          required: false,
        },
        time: { type: Date, default: Date.now, required: false },
      },
    ],
  },
  { timestamps: true }
);

//classSchema.plugin(passportLocalMongoose)
export default mongoose.model("classSchema", classSchema);
