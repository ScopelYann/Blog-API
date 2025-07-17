import { UsersRepository } from "../database/repository/user.repository"
import { AppError } from "@/app/error/app.error";
import { StatusCodes } from "http-status-codes";
import { CreateDTOUser } from "@/dtos/dtos.session";
import { SessionEntity } from "@/entity/session.entity";
import jwt from "jsonwebtoken"
import auth from "@/config/auth";

export class SessionService {
    constructor(public repository: UsersRepository) { }

    async verific({ email, password }: CreateDTOUser) {


        const findEmail = await this.repository.findByEmail(email)

        if (!findEmail) {
            throw new AppError("Email or Password not Exists", StatusCodes.BAD_REQUEST)
        }

        const RealyPassword = await this.repository.userCompare(email)
        const IsSamePassword = await RealyPassword?.comparePassword(password)

        if (!IsSamePassword) {
            throw new AppError("Email or Password not Exists", StatusCodes.BAD_REQUEST)
        }

        try {
            const user = await findEmail;

            const SignUp: SessionEntity = {
                id: user.id,
                email: user.email,
                password: user.password,
                admin: user.admin,
                token: jwt.sign({ id: user.id }, auth.secret, { expiresIn: '5d' }),
            }
            return SignUp
        } catch (err) {
            throw new AppError("Ocurred a Problem while signUp", StatusCodes.BAD_REQUEST)
        }
    }
}
