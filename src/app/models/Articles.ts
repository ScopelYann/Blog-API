import { DataTypes, Model, Sequelize } from "sequelize";
import Categories from "./Categories";

export interface Models {
    Article: typeof Article
    Categories: typeof Categories
}


class Article extends Model {
    declare title: string
    declare slug: string
    declare featured_image: string
    declare url: string

    static inicializate(sequelize: Sequelize) {
        super.init({
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false
            },
            featured_image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            url: {
                type: DataTypes.VIRTUAL,
                get(this: Article) {
                    return `http://localhost:3000/file-article/${this.featured_image}`
                }
            },
            excerpt: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contents: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            status: {
                type: DataTypes.ENUM("draft", "published", "archived"),
                allowNull: false
            },
        },
            {
                sequelize,
                createdAt: "created_at",
                updatedAt: "updated_at",
            }
        )
        return this
    }

    static associate(models: Models) {
        this.belongsTo(models.Categories, {
            foreignKey: 'category_id',
            as: 'category'
        })

    }
}