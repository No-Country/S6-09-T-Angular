import jwt from "jsonwebtoken";

function generateToken(user) {
  if (user) {
    let token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.jwtSecret,
      {
        expiresIn: 18000, // 5 hours in seconds
      }
    );
    return token;
  }
}

const resetPasswordToken = (user) => {
  if (user) {
    let token = jwt.sign(
      {
        id: user._id,
      },
      process.env.jwtSecret,
      {
        expiresIn: 1800, // 5 hours in seconds
      }
    );
    return token;
  }
};

export { resetPasswordToken, generateToken };
