import yup from "yup";
import * as uuid from "uuid";
import { RequestHandler } from "express";
import { UserModel } from "../../database/index";

const datas = new Date();

class UserController {
  store: RequestHandler = async (req, res) => {
    const Schema = yup.object({
      name: yup
        .string()
        .strict(true)
        .matches(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras"),
      email: yup.string().email().required(),
      admin: yup.boolean(),
      password: yup.string().required().min(6),
    });

    try {
      Schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      res.status(400).json({ err: err });
    }

    const { name, email, admin, password} = req.body;

    const findUser = await UserModel.findOne({
      where: {
        email,
      },
    });
    if (findUser) {
      res.status(400).json({ message: "Email already" });
    }
    try {
      const user = await UserModel.create({
        id: uuid.v4(),
        name: name,
        email: email,
        admin: admin,
        password: password,
        created_at: String(datas.toDateString()),
        updated_at: String(datas.toDateString()),
      });
      res.status(201).json({
        id: user.id,
        name: name,
        email: email,
        admin: admin,
      });
    } catch (err) {
      res.status(404).json({menssage: `Ocurred A error while signUp User ${err}`});
    }
  };
  index: RequestHandler = async (_, res) => {
    const findAllUsers = await UserModel.findAll();
    res.status(200).json(findAllUsers);
  };

  delete: RequestHandler = async (req, res) => {
    try {
      await UserModel.destroy({
        where: {
          id: req.params.id,
        }
      });
      res
        .status(200)
        .json({ message: `User with id: ${req.params.id} he was deleted`});
    } catch (err) {
      res
        .status(200)
        .json({message: `Not he was possible delete User`})
    }
  };
}
export default new UserController();
