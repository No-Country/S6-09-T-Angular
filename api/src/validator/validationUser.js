import { body } from "express-validator";
const rulesUser = [
  body("name").exists().not().notEmpty(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }).notEmpty(),
  body("email").isEmail().notEmpty(),
];

export { rulesUser };
