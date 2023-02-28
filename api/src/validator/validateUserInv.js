import { body, param } from "express-validator";
const rulesUserInv = [
  param("id", "necesitas un id de mongo valido").isMongoId(),
  body("user", "necesitas un id de mongo valido")
    .exists()
    .notEmpty()
    .isMongoId(),
];

export { rulesUserInv };
