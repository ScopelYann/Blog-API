import e from "express";
import { UserModel } from "../../database/index";
import { CreateDTOUser, createUserSchema } from "@/dtos/dtos.session";
import { AppError } from "../error/app.error";
import { StatusCodes } from "http-status-codes";
import { UsersRepository } from "@/database/repository/user.repository";
import { SessionService } from "@/service/session.service";

class SessionUser {
  async store(
    req: e.Request<unknown, unknown, CreateDTOUser>,
    res: e.Response,
    _: e.NextFunction
  ) {

    const isValid = await createUserSchema.isValid(req.body)
    const repository = new UsersRepository(UserModel)
    const service = new SessionService(repository)
    const { email, password } = req.body;

    if (!isValid) {
      throw new AppError("Error", StatusCodes.BAD_REQUEST)
    }

    try {

      const user = await service.verific({ email, password })
      res.status(StatusCodes.CREATED).json({ user })

    } catch (err) {

      throw new AppError(`error: ${err}`, StatusCodes.BAD_REQUEST)

    }

    /* Login 
     - criar schema Ok
     - validar com ValidateSync e Erro Ok
     - validar/verificar se possui um email igual e validar senha - OK
     - responder a requisição com as informações de registro Ok
     - Fazer middlewaer jwt
    */


  };
}

export default new SessionUser();
