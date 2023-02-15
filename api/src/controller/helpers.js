import jwt from "jsonwebtoken"; //Para poder generar el token

//servirá para todos los controladores
function buildParams(validParams, body) {
  let params = {};

  validParams.forEach((attr) => {
    if (Object.prototype.hasOwnProperty.call(body, attr))
      params[attr] = body[attr];
  });
  return params;
}

//Para la lógica de generación de tokens:
function generateToken(req, res, next) {
  if (!req.user) return next();

  req.token = jwt.sign({ id: req.user._id }, process.env.jwtSecret);
  next();
}

function sendToken(req, res) {
  if (req.user) {
    res.json({
      user: req.user.name,
      jwt: req.token,
    });
  } else {
    res.status(422).json({
      error: "No se pudo crear el usuario",
    });
  }
}

export { buildParams, generateToken, sendToken };
