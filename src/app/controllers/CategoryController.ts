import e from "express";
import { TypeSchemaCategories } from "../../dtos/dtos.categories"
import { SchemaCategories } from "../../dtos/dtos.categories"
import { StatusCodes } from "http-status-codes";
import { AppError } from "../error/app.error";

export class Category {
    async store(req: e.Request<unknown, unknown, TypeSchemaCategories>, res: e.Response, _: e.NextFunction) {
        try {
            SchemaCategories.validateSync(req.body, { abortEarly: true })
        } catch (error) {
            throw new AppError(`error: ${error}`, StatusCodes.BAD_REQUEST)
        }
        /*
        - Verificar os dados da requisição -OK
        - Criar Service de criação de Categorias
          |
          - Validação de admin, para ser possivel criar
          - Criar caso for Admin
          - Criar Repository
        */
    }
}