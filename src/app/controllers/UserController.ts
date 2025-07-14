import * as uuid from "uuid";
import e, { RequestHandler } from "express";
import { UserModel } from "../../database/index";
import { CreatedUser, UserCreatedSchema } from "../../dtos/dtos.user"
import { UserService } from "../../service/user.service"
import { UsersRepository } from "../../database/repository/user.repository"


class UserController {
  async store
    (
      req: e.Request<unknown, unknown, CreatedUser>,
      res: e.Response,
      _: e.NextFunction
    ) {

    const repository = new UsersRepository(UserModel)
    const service = new UserService(repository)

    try {
      UserCreatedSchema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      res.status(400).json({ err: err });
    }

    const { name, email, admin, password } = req.body;

    try {
      const user = await service.store({name, email, admin, password})

      res.status(201).json({
        id: user.id,
        name: name,
        email: email,
        admin: admin,
      });

    } catch (err) {
      res.status(404).json({ menssage: `Ocurred A error while signUp User ${err}` });
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
        .json({ message: `User with id: ${req.params.id} he was deleted` });
    } catch (err) {
      res
        .status(200)
        .json({ message: `Not he was possible delete User` })
    }
  };
}
export default new UserController();
