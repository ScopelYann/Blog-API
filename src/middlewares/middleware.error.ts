import { AppError } from "@/app/error/app.error";
import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";


export const ErrorHandler: ErrorRequestHandler = (error, _, res, next) => {
    if (error instanceof AppError) {
        res
            .status(error.StatusCode)
            .json(error.message)
        return
    }

    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message })

}