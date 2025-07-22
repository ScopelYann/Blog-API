import { DataTypes, Model, Sequelize } from "sequelize";

class Categories extends Model {

    static inicializate(sequelize: Sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        },
            {
                sequelize,
                createdAt: "created_at",
                updatedAt: "updated_at",
            }
        )
        return this
    }
}

export default Categories