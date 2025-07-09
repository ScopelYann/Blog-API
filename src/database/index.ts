import { Sequelize } from "sequelize";
import User from "../app/models/User.ts";
import configDatabase from "../config/database.ts"


class DataBase {
  public connection!: Sequelize;
  public models!: {
    User: typeof User
  }
  constructor() {
    this.connection = new Sequelize(configDatabase)
    User.initialize(this.connection)
    this.models = {
      User
    }
  }
}

export const database = new DataBase();
export const UserModel = database.models.User
