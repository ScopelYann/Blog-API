import {Router} from "express";
import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
export const baseRoutes = Router();




baseRoutes.post("/user", UserController.store)
baseRoutes.post("/session", SessionController.store)

 