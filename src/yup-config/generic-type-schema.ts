import * as yup from "yup";

export const FormGenericTypeSchema = yup.object({
    token: yup
        .string()
        .min(1, "Informe algum token")
        .max(255, "Token deve ter até 255 caracteres")
        .required("Informe um nome de token"),
    value: yup
        .string()
        .min(1, "Informe algum valor")
        .max(512, "Valor deve ter até 512 caracteres")
        .required("Informe um valor para a configuração"),
    description: yup
        .string()
        .min(1, "Informe alguma descrição")
        .max(1024, "Descrição deve ter até 1024 caracteres")
        .required("Informe um valor para a descrição"),
    valueBool: yup.boolean(),
});
