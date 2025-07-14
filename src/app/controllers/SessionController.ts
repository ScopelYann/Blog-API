import { Response } from "express";
import e from "express";
import { UserModel } from "../../database/index";
import { CreateDTOUser, createUserSchema } from "@/dtos/dtos.session";
import auth from "@/config/auth";
import * as jwt from "jsonwebtoken"

class SessionUser {

  async store(
    req: e.Request<unknown, unknown, CreateDTOUser>,
    res: e.Response,
    _: e.NextFunction
  ) {

    const isValid = await createUserSchema.isValid(req.body)
    const { email, password } = req.body;


    function EmailOrPasswordIncorrect(): Response {
      return res
        .status(401)
        .json({ message: "Email Or Password Incorrect" })
    }

    if (!isValid) {
      EmailOrPasswordIncorrect()
    }

    const user: null | any = await UserModel.findOne({
      where: {
        email,
      }
    });

    if (!user) {
      EmailOrPasswordIncorrect()
    }

    const IsSamePassword = await user.comparePassword(password)

    if (!IsSamePassword) {
      EmailOrPasswordIncorrect()
    }

    res
      .status(201)
      .json({
        id: user?.id,
        email,
        password,
        admin: user?.admin,
        token: jwt.sign({ id: user.id }, auth.secret, {
          expiresIn: '5d'
        })
      })




    // const {email, password} = req.body


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
