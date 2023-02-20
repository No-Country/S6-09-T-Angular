import { body,param } from "express-validator";
const rulesUserupdate = [
  param("id", "necesitas un id de mongo valido").isMongoId()
];

export { rulesUserupdate };
