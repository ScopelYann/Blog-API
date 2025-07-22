import { CategoriesEntity } from "@/entity/categories.entity";
import { CategoryRepository } from "../database/repository/category.repository"
import { TypeSchemaCategories } from "../dtos/dtos.categories"
import { AppError } from "@/app/error/app.error";
import { StatusCodes } from "http-status-codes";


class ServiceCategories {
    constructor(public repository: CategoryRepository) { }

    async store({ id, name, slug, description, color }: TypeSchemaCategories) {

        const isValid = await this.repository.findCategory(id)

        if(!isValid){
            throw new AppError("Category alrealdy exists", StatusCodes.BAD_REQUEST)
        }
        // Fazer validação com name e não com id
    }