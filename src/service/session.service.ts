import { UsersRepository } from "../database/repository/user.repository"
import { AppError } from "@/app/error/app.error";
import { StatusCodes } from "http-status-codes";
import User from "../app/models/User";
import { CreateDTOUser } from "@/dtos/dtos.session";

type TypeSignUp = {
    id: string,
    email: string,
    password: string,
    admin: string
}

export class SessionService {
    public id!: string
    public email!: string
    public password!: string
    public admin!: string


    constructor(public repository: UsersRepository) { }

    async verific({ email, password }: CreateDTOUser) {


        const findEmail = await this.repository.findByEmail(email)

        if (!findEmail) {
            throw new AppError("Email or Password not Exists", StatusCodes.BAD_REQUEST)
        }

        const RealyPassword = await this.repository.userCompare(email)
        const IsSamePassword = await RealyPassword?.comparePassword(password)
        console.log(IsSamePassword)
        if (!IsSamePassword) {
            throw new AppError("Email or Password not Exists", StatusCodes.BAD_REQUEST)
        }

        try {
            const user = await findEmail;
            
            const SignUp: TypeSignUp = {
                id: user.id,
                email: user.email,
                password: user.password,
                admin: user.admin
            }
            return SignUp
        } catch (err) {
            throw new AppError("Ocurred a Problem while signUp", StatusCodes.BAD_REQUEST)
        }
    }
}
/**
 * TENHO QUE LOGAR O USUARIO
 * entao verificar se existe o email colocado no reqbody dentro do banco de dados
 * depois comparar a senha e verificar se DEU CERTO OU NÃO
 */