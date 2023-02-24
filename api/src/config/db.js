import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, //Este código se añadió por si las dudas para que no aparezca ciertos mensajes de deprecación o algo semejante.
    useUnifiedTopology: true,
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("Conectado a la base de datos MONGODB");
}

export default main;
