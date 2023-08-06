import * as yup from "yup";

export const FormLoginSchema = yup.object({
    userName: yup
        .string()
        .min(1, "Informe algum nome de usuário")
        .max(32, "Nome de usuário deve ter até 32 caracteres")
        .required("Informe seu nome de usuário"),
    password: yup
        .string()
        .min(1, "Informe alguma senha")
        .max(32, "Senha deve ter até 32 caracteres")
        .required("Informe sua senha"),
});
