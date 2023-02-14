import express from "express";
const app = express();
import routeHome from "../route/home.js";
import classroom from "../route/classroomRoute.js";
import userRoute from "../route/usersRoute.js"
import sessionRoute from "../route/sessionRoute.js";

function routerApi(app) {
  app.use("/api", routeHome);
  app.use("/classroom", classroom);
  app.use("/users",userRoute);
  app.use("/session", sessionRoute);
}

export default routerApi;
