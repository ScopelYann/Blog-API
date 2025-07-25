import { Sequelize, DataTypes, Model } from "sequelize";
import * as bcrypt from "bcrypt";



class User extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare password_hash: string;
  declare admin?: boolean;
  declare created_at: string;
  declare updated_at: string;
  declare avatar_url: string;
  declare url: string;
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
        avatar_url: DataTypes.STRING,
        url: {
          type: DataTypes.VIRTUAL,
          get(this: User) {
            return `http://localhost:3000/avatar_url/${this.avatar_url}`
          }
        }
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

  comparePassword(password: typeof this.password): Promise<Boolean> {
    const passwordhash = bcrypt.compare(password, this.password_hash);
    return passwordhash;
  }
}
export default User;
