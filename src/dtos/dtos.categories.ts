import * as yup from "yup"


export const CategoriesDTO = {
    id: yup.number().required(),
    name: yup.string().required(),
    slug: yup.string().required(),
    description: yup.string().required(),
    color: yup.string().required(),
}

export const SchemaCategories = yup.object(CategoriesDTO)
export type TypeSchemaCategories = yup.InferType<typeof SchemaCategories>
