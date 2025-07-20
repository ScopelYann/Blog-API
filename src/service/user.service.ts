import { UsersRepository } from "../database/repository/user.repository"
import { UserEntity } from "../entity/user.entity"
import { CreatedUser } from "../dtos/dtos.user"
import * as uuid from "uuid"
import e from "express"


export class UserService {
    constructor(public RepositoryUser: UsersRepository) { }

    async store({ name, email, password, admin }: CreatedUser, {avatar_url}: string | any): Promise<UserEntity> {

        const findEmail = await this.RepositoryUser.findByEmail(email)
        const datas = new Date();

        if (findEmail) {
            console.log("error in Email")
        }

        const createdNewUser = new UserEntity({
            id: String(uuid.v4()),
            name,
            email,
            password,
            admin,
            created_at: String(datas.toDateString()),
            updated_at: String(datas.toDateString()),
            avatar_url: avatar_url
        })

        const createdUser = await this.RepositoryUser.create(createdNewUser)
        return createdUser

    }
}