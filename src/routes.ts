import { Router } from "express";
import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import { Validation } from "./middlewares/validator.middleware";
import { UserRegisterDTO } from "./dtos/dtos.user"
import { SchemaDTO } from "./dtos/dtos.session"
import { ParamsType } from "./middlewares/validator.middleware"
import multer from "multer";
import multerConfig from "./config/multerConfig.mts"
export const baseRoutes = Router();

const upload = multer(multerConfig)



baseRoutes.post("/user", upload.single("file"), Validation({
    schema: UserRegisterDTO,
    type: ParamsType.BODY
}), UserController.store)
baseRoutes.post("/session", Validation({
    schema: SchemaDTO,
    type: ParamsType.BODY
}), SessionController.store)

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