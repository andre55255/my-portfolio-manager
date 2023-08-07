import * as yup from "yup";

export const FormResetPasswordSignInSchema = yup.object({
    oldPassword: yup
        .string()
        .min(1, "Informe sua senha antiga")
        .max(32, "Senha deve ter até 32 caracteres")
        .required("Informe sua senha antiga"),
        newPassword: yup
        .string()
        .min(1, "Informe sua senha nova")
        .max(32, "Senha deve ter até 32 caracteres")
        .required("Informe sua senha nova"),
});
