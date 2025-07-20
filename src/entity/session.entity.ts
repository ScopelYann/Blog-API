type TypeSignUp = {
    id: string,
    email: string,
    password: string,
    admin: string,
    token: string
}

export class SessionEntity {
    public id!: string
    public email!: string
    public password_hash!: string
    public admin!: string
    public token!: string

    constructor({id, email, password, admin, token}: TypeSignUp){
        this.id = id
        this.email = email
        this.password_hash = password
        this.admin = admin
        this.token = token
    }
}