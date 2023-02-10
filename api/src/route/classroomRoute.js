import express from "express";
import classSchema from "../models/classSchema.js";
import { deleted, getClassRoom } from "../controller/classroom.js";
const app = express();

// Create new classroom
app.post("/classroom", async (req, res) => {
  const user = classSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all user classrooms
app.get("/classroom/:id", (req, res) => {
  const { id } = req.params;
  classSchema
    .find({ user_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all classrooms
app.get("/all", getClassRoom);

// Delete an user classroom
app.delete("/delete/:id", deleted);

export default app;
