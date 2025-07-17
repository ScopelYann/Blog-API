import { AppError } from "@/app/error/app.error";
import e from "express";
import { StatusCodes } from "http-status-codes";
import yup from "yup"

export enum ParamsType {
    QUERY = "query",
    BODY = "body"
}

export type ValidateParams = {
    schema: yup.ObjectShape, // na rota eu preciso receber o schema que no caso e o DTO da rota
    type: ParamsType
}
/* aqui ele já espera um tipo objeto com 2 valores o Schema e O tipo de requisição*/
export function Validation(params: ValidateParams) {
    return (req: e.Request, _: e.Response, next: e.NextFunction) => {
        const result = yup.object(params.schema).validateSync(req[params.type], { abortEarly: true, stripUnknown: true })
        try {
            result
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errorformated = err.inner.map((item) => `${item.path}:${item.message}`)
                throw new AppError(errorformated, StatusCodes.UNPROCESSABLE_ENTITY)
            }
        }
        req[params.type] = result
        next()
    }
}