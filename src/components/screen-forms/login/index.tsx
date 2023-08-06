import { useFormik, FormikHelpers } from "formik";
import { FormLoginType } from "../../../types/service-login-data";
import ButtonNormal from "../../forms/button-normal";
import FormDefault from "../../forms/form-default";
import InputNormal from "../../forms/input-normal";
import InputPassword from "../../forms/input-password";
import { FormLoginSchema } from "../../../yup-config/form-login-schema";
import Loading from "../../loading";

type ScreenFormLoginProps = {
    isFetching: boolean;
    handleSubmit: (
        values: FormLoginType,
        formikHelpers: FormikHelpers<FormLoginType>
    ) => void | Promise<any>;
};

export default function ScreenFormLogin({
    isFetching,
    handleSubmit,
}: ScreenFormLoginProps) {
    const initialValues: FormLoginType = {
        userName: "",
        password: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormLoginSchema,
    });

    return (
        <FormDefault handleSubmit={formik.handleSubmit}>
            <InputNormal
                label="Nome de usuário"
                name="userName"
                type="text"
                placeholder="Digite seu nome de usuário"
                value={formik.values.userName}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.userName && formik.errors.userName
                        ? true
                        : false
                }
                errorMessage={formik.errors.userName}
            />
            <InputPassword
                label="Senha"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.password && formik.errors.password
                        ? true
                        : false
                }
                errorMessage={formik.errors.password}
            />

            <ButtonNormal disabled={isFetching ? true : false}>
                {isFetching ? <Loading isFetching={isFetching} /> : "Enviar"}
            </ButtonNormal>
        </FormDefault>
    );
}
