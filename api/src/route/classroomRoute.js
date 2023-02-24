import express from "express";
import classSchema from "../models/classSchema.js";
import {
  createClassRoom,
  getClassRoom,
  getallClassRoom,
  deleteClassRoom,
  updateClassRoom,
} from "../controller/classroom.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesClass } from "../validator/validatorClassrom.js";
import { rulesUserupdate } from "../validator/validationUpdateUser.js";
const app = express();

// Create new classroom
app.post("/create", rulesClass, validationGeneral, createClassRoom);

// Get all user classrooms
app.get("/classroom/:id", rulesUserupdate, validationGeneral, getClassRoom);

// Get all classrooms
app.get("/all", getallClassRoom);

// Update an user classroom
app.patch("/update/:id", updateClassRoom);

export default app;
