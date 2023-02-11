import express from "express";
import classSchema from "../models/classSchema.js";
import { createClassRoom, getClassRoom, getallClassRoom, deleteClassRoom } from "../controller/classroom.js";
const app = express();

// Create new classroom
app.post("/create", createClassRoom);

// Get all user classrooms
app.get("/classroom/:id", getClassRoom);

// Get all classrooms
app.get("/all", getallClassRoom);

// Delete an user classroom
app.delete("/delete/:id", deleteClassRoom);

export default app;
