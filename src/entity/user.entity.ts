type UsertypeEntity = {
    id: string,
    name: string,
    email: string,
    password: string,
    admin: boolean | any,
    created_at: string,
    updated_at: string
}

export class UserEntity {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public admin?: boolean | any;
    public created_at!: string;
    public updated_at!: string;

    constructor({ id, name, email, password, admin, created_at, updated_at }: UsertypeEntity) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.admin = admin
        this.created_at = created_at,
        this.updated_at = updated_at
    }

}