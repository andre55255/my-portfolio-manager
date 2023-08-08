import * as yup from "yup";

export const FormConfigurationSchema = yup.object({
    token: yup
        .string()
        .min(1, "Informe algum token")
        .max(128, "Token deve ter até 128 caracteres")
        .required("Informe um nome de token"),
    value: yup
        .string()
        .min(1, "Informe algum valor")
        .max(255, "Valor deve ter até 255 caracteres")
        .required("Informe um valor para a configuração"),
    extra: yup
        .string()
});
