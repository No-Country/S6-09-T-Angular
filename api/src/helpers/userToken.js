import jwt from "jsonwebtoken"; //Para poder generar el token

//Para la lógica de generación de tokens:
function generateToken(user) {
  if (user) {
    let token = jwt.sign({ id: user._id }, process.env.jwtSecret);
    return token;
  }
}

export { generateToken };
