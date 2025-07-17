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

      //verificações e resposta com dados
      const user = await service.verific({ email, password })

      res
        .status(StatusCodes.CREATED)
        .json(user) //resposta com dados de login

    } catch (err) {

      throw new AppError(`error: ${err}`, StatusCodes.BAD_REQUEST)

    }
  };
}

export default new SessionUser();
