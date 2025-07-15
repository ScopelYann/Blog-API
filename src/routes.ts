import {Router} from "express";
import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
export const baseRoutes = Router();




baseRoutes.post("/user", UserController.store)
baseRoutes.post("/session", SessionController.store)

/*
    - Repository de Registro de Usuario completo(UserController) - OK
    - Service de Registro de Usuario completo(UserController) - OK
    - Adicionar Repository e Service de SessionController
    - Adicionar na criação de usuario{
        - foto de avatar
        users (id, name, email, password_hash, role, avatar_url, created_at)
        além das que eu coloquei, tenho que colocar avatar_url sendo opcional na hora da criação e configuração tambem 
 
    }
*/