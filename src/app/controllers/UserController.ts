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
    
    const avatar_url: string | undefined = req.file?.filename

    try {   
      const user = await service.store({ name, email, admin, password }, {avatar_url})

      res.status(201).json({
        id: user.id,
        name: name,
        email: email,
        admin: admin,
        avatar_url: avatar_url,
      });



    } catch (err) {
      res.status(404).json({ menssage: `Ocurred A error while signUp User ${err}` });
    }
  };
  index: RequestHandler = async (_, res) => {
    const findAllUsers = await UserModel.findAll();
    res.status(200).json(findAllUsers);
  };
}
export default new UserController();
