export type CategoriesType = {
    id: number
    name: string,
    slug: string,
    description: string,
    color: string,
}


export class CategoriesEntity {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string
    public color!: string

    constructor({ id, name, slug, description, color }: CategoriesType) {
        this.id = id,
        this.name = name,
        this.slug = slug,
        this.description = description,
        this.color = color
    }
}