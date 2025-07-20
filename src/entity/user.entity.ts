type UsertypeEntity = {
    id: string,
    name: string,
    email: string,
    password: string,
    admin: boolean | any,
    created_at: string,
    updated_at: string,
    avatar_url: string | any,
}

export class UserEntity {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public admin?: boolean | any;
    public created_at!: string;
    public updated_at!: string;
    public avatar_url?: string | any;

    constructor({ id, name, email, password, admin, created_at, updated_at, avatar_url }: UsertypeEntity) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.admin = admin
        this.created_at = created_at,
        this.updated_at = updated_at
        this.avatar_url = avatar_url
    }

}