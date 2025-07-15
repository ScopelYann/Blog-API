import { StatusCodes } from "http-status-codes";

export class AppError{
    public StatusCode: StatusCodes;
    public message: string | string[];

    constructor(message: string | string[], StatusCode: StatusCodes){
        this.message = message
        this.StatusCode = StatusCode
    }
}