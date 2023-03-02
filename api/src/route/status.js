import express from "express";
const app = express();
import {status} from "../controller/status.js"

app.post("/",status);


export default app;