import { body } from "express-validator";
const rulesClass = [
  body("user_id", "Tien que ser un id de mongo valido")
    .exists()
    .notEmpty()
    .isMongoId(),
  // password must be at least 5 chars long
  body("classroom_name").notEmpty().isString().isLength({ min: 4 }),
  body("category").notEmpty().isString(),
];

export { rulesClass };
