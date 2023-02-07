import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.DB_CONNECTION);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("conectado a la base de datos");
}

export default main;
