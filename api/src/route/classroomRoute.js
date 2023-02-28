import express from "express";
import classSchema from "../models/classSchema.js";
import {
  createClassRoom,
  getClassRoom,
  getallClassRoom,
  deleteClassRoom,
  updateClassRoom,
} from "../controller/classroom.js";
import { hasAccess } from "../middleware/hasaccess.js";
import { rulesClass } from "../validator/validatorClassrom.js";
import { validationGeneral } from "../validator/validationGeneral.js";
const app = express();

import uploadFiles from "../controller/fileUploader.js";
import fileDownload from "../controller/fileDownloader.js";

// Create new classroom
app.post("/create", createClassRoom);

// Get all user classrooms
app.get("/classroom/:id", getClassRoom);

// Get all classrooms
app.get("/all", hasAccess, getallClassRoom);

//invitacion de alumnos
app.get("/addUser/:id");
app.get("/deleteUser/id");
// Update an user classroom
app.patch("/update/:id", updateClassRoom);

// Upload and download files
app.post("/upload", uploadFiles);
app.get("/download/:name", fileDownload);

export default app;
