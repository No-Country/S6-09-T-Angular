import { body } from "express-validator";
const rulesClass = [
  body("user_id").exists().notEmpty().isMongoId(),
  // password must be at least 5 chars long
  body("classroom_name").notEmpty().isString(),
  body("category").notEmpty().isString(),
];

export { rulesClass };
