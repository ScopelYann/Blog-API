import yup from "yup";
import { RequestHandler } from "express";


class SessionUser {
  store: RequestHandler = async (req, res) => {
    const Schema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().required().min(10),
    });

    try {
        Schema.validateSync(req.body, {abortEarly: false})
    } catch (error) {
        res
            .status(400)
            .json({err: console.log(error)})
    }

    // const {email, password} = req.body


    /* Login 
     - criar schema Ok
     - validar com ValidateSync e Erro Ok
     - validar/verificar se possui um email igual e validar senha
    */
  };
}

export default SessionUser;
