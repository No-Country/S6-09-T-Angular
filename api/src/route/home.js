import express, { Router } from "express";
const router = express.Router();
import { home } from "../controller/home.js";
import { hasAccess } from "../middleware/hasaccess.js";

router.get("/home", home);
router.post("/home", hasAccess);
export default router;
