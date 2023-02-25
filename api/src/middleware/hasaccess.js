import jwt from 'jsonwebtoken';
import userSchema from "../models/userSchema.js"
const hasAccess = async (req, res, next) => {
  try {
    let tokenHeader = req.header('authorization');
    if (tokenHeader) {
      let token = tokenHeader.substring('Bearer '.length);

      const decoded = jwt.verify(token, process.env.jwtSecret);

      // Verify expiration time of token
      const now = Math.floor(Date.now() / 1000);
      const valid = decoded.exp >= now;

      if (!valid) {
        return res.send({message:'Token expired',valid:false});
      }

      let updateuser = await userSchema.findByIdAndUpdate(
        { _id: decoded.id },
        { online: true }
      );
    
      next();
    } else {
      res.status(403).send({
        valid: false,
        message: 'No token provided',
      });
    }
  } catch (error) {
    res.status(401).send({
      valid: false,
      message: error.message,
    });
  }
};

export { hasAccess };
