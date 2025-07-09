import { Options } from "sequelize";

export interface DatabaseConfig extends Options {
  host: string;
  dialect: "postgres";
  username: string;
  password: string;
  database: string;
  define: {
    timestamps: boolean;
    underscored: boolean;
  };
}

const configDatabase: DatabaseConfig = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Mudar123!",
  database: "postgres",

  define: {
    timestamps: true,
    underscored: true
  },
};
export default configDatabase
