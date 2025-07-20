import e from "express";
import yup from "yup"

export const UserRegisterDTO = {
    name: yup
        .string()
        .strict(true)
        .matches(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras")
        .required(),
    email: yup.string().email().required(),
    admin: yup.boolean(),
    password: yup.string().required().min(6)
}

export const UserCreatedSchema = yup.object(UserRegisterDTO)
export type CreatedUser = yup.InferType<typeof UserCreatedSchema>