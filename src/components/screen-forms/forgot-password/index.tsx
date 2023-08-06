import { useFormik, FormikHelpers } from "formik";
import { FormForgotPasswordType } from "../../../types/service-forgot-password-data";
import ButtonNormal from "../../forms/button-normal";
import FormDefault from "../../forms/form-default";
import InputNormal from "../../forms/input-normal";
import { FormForgotPasswordSchema } from "../../../yup-config/forgot-password-schema";
import Loading from "../../loading";

type ScreenFormForgotProps = {
    isFetching: boolean;
    handleSubmit: (
        values: FormForgotPasswordType,
        formikHelpers: FormikHelpers<FormForgotPasswordType>
    ) => void | Promise<any>;
};

export default function ScreenFormForgotPassword({
    isFetching,
    handleSubmit,
}: ScreenFormForgotProps) {
    const initialValues: FormForgotPasswordType = {
        userName: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormForgotPasswordSchema,
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
            <ButtonNormal disabled={isFetching ? true : false}>
                {isFetching ? <Loading isFetching={isFetching} /> : "Enviar"}
            </ButtonNormal>
        </FormDefault>
    );
}
