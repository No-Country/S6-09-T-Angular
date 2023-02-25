import express from "express";
import classSchema from "../models/classSchema.js";
import { createClassRoom, getClassRoom, getallClassRoom, deleteClassRoom, updateClassRoom } from "../controller/classroom.js";
import {hasAccess} from "../middleware/hasaccess.js"

const app = express();


// Create new classroom
app.post("/create",hasAccess, createClassRoom);

// Get all user classrooms
app.get("/classroom/:id", getClassRoom);

// Get all classrooms
app.get("/all", getallClassRoom);

// Update an user classroom
app.patch("/update/:id", updateClassRoom);

export default app;
