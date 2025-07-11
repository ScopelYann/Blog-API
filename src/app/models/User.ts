import { Sequelize, DataTypes, Model } from "sequelize";
import * as bcrypt from "bcrypt";

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
  declare id: string;
  declare name: string;
  declare email: string;
  declare password?: string | any;
  declare password_hash: string;
  declare admin?: boolean;
  declare created_at: string;
  declare updated_at: string;
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
      console.log(user.password, user.password_hash)
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
