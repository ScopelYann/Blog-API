import User from "@/app/models/User";
import { UserEntity } from "../../entity/user.entity"

export class UsersRepository {
    constructor(private model: typeof User) { }

    async create({ id, name, email, password, admin, created_at, updated_at }: UserEntity): Promise<UserEntity> {
        const createdUser = await this.model.create(
            {
                id,
                name,
                email,
                password,
                admin,
                created_at,
                updated_at,
            }
        )

        return createdUser.toJSON<UserEntity>()
    }

    async findByEmail(email: string): Promise<UserEntity | undefined> {
        const findEmail = await this.model.findOne({ where: { email } })

        return findEmail?.toJSON<UserEntity>()
    }
    async userCompare(email: string): Promise<User | undefined> {
        const user = await this.model.findOne({ where: { email } })
        return user ?? undefined
    }

} 