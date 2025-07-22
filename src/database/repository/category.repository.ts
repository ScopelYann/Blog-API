import { CategoriesEntity } from "@/entity/categories.entity";
import Categories from "../../app/models/Categories"

export class CategoryRepository {
    constructor(public model: typeof Categories) { }

    async storeCategory({ name, slug, description, color }: CategoriesEntity) {
        const CreatedCategory = await this.model.create({ name, slug, description, color })

        return CreatedCategory.toJSON<CategoriesEntity>()
    }

    async findCategory(id: number): Promise<CategoriesEntity | undefined>{
        const findById = await this.model.findOne({
            where: {
                id
            }
        })
        return findById?.toJSON<CategoriesEntity>()
    }
}