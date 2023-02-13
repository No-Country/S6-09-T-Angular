import express from "express";
const app = express();
import routeHome from "../route/home.js";
import classroom from "../route/classroomRoute.js"
import userRoute from "../route/usersRoute.js"

function routerApi(app) {
  app.use("/api", routeHome);
  app.use("/classroom", classroom)
  app.use('/users', userRoute) //Todas las rutas que vaya a utilizar se ponen aquí.
 
}

export default routerApi;
