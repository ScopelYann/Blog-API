import { Sequelize, DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";

interface UserAtributes {
  id: string;
  name: string;
  email: string;
  password?: string;
  password_hash?: string;
  admin?: boolean;
  created_at?: string;
  updated_at?: string;
}

class User extends Model<UserAtributes> {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public password_hash!: string;
  public created_at!: string;
  public updated_at!: string;

  static initialize(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        created_at: DataTypes.STRING,
        updated_at: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "User",
        timestamps: false,
      }
    );
    this.addHook("beforeSave", async (user: User) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });
    return this;
  }

  comparePassword(): Promise<Boolean> {
    const passwordhash = bcrypt.compare(this.password, this.password_hash);
    return passwordhash;
  }
}
export default User;
