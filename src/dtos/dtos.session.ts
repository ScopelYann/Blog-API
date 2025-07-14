import * as yup from "yup"

// type DT0_session = {
//     email: string,
//     password: string
// }

const SchemaDTO = ({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

export const createUserSchema = yup.object(SchemaDTO)
export type CreateDTOUser = yup.InferType<typeof createUserSchema>