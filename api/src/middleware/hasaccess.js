import jwt from "jsonwebtoken";
import userSchema from "../models/userSchema.js";

const hasAccess = async (req, res, next) => {
  try {
    let tokenHeader = req.header("authorization");
    if (tokenHeader) {
      let token = tokenHeader.substring("Bearer ".length);

      const user = jwt.verify(token, process.env.jwtSecret);
      let updateuser = await userSchema.findByIdAndUpdate(
        { _id: user.id },
        { online: false }
      );
      next();
    } else {
      res.send({
        status:403,
        valid:false})
    }
  } catch (error) {
    res.send({
      status:401,
      valid:false})
  }
};

export { hasAccess };
