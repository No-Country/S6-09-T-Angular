import express from "express";
const app = express();
const router = express.Router();
import { passworReset, passwordUpdate } from "../controller/passwordReset.js";


router.patch("/", passwordUpdate);


export default router