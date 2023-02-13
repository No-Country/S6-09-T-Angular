import express from "express";
const app = express();
import routeHome from "../route/home.js";
import classroom from "../route/classroomRoute.js";

function routerApi(app) {
  app.use("/api", routeHome);
  app.use("/classroom", classroom);
}

export default routerApi;
