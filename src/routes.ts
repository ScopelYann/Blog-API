import {Router} from "express";
import UserController from "./app/controllers/UserController"

export const baseRoutes = Router();

baseRoutes.post("/user", UserController.store)
baseRoutes.get("/user", UserController.index)
baseRoutes.delete("/user/:id", UserController.delete)

 