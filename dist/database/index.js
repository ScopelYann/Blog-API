"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DataBase = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Mudar123!",
    database: "postgres",
});
try {
    DataBase.authenticate();
    console.log("Connection has been established successlfully");
}
catch (error) {
    console.log("Erro", error);
}
//# sourceMappingURL=index.js.map