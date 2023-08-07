import { ResetPasswordSignInType } from "../../../types/service-reset-password-signin-data";
import { FormikHelpers, useFormik } from "formik";
import { FormResetPasswordSignInSchema } from "../../../yup-config/reset-password-sign-in-schema";
import FormDefault from "../../forms/form-default";
import InputPassword from "../../forms/input-password";
import ButtonNormal from "../../forms/button-normal";
import Loading from "../../loading";

type ScreenFormResetPassProps = {
    isFetching: boolean;
    handleSubmit: (
        values: ResetPasswordSignInType,
        formikHelpers: FormikHelpers<ResetPasswordSignInType>
    ) => void | Promise<any>;
};

export default function ScreenFormResetPasswordSignIn({
    isFetching,
    handleSubmit,
}: ScreenFormResetPassProps) {
    const initialValues: ResetPasswordSignInType = {
        newPassword: "",
        oldPassword: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormResetPasswordSignInSchema,
    });

    return (
        <FormDefault handleSubmit={formik.handleSubmit}>
            <InputPassword
                label="Senha antiga"
                name="oldPassword"
                type="password"
                placeholder="Digite sua senha antiga"
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.oldPassword && formik.errors.oldPassword
                        ? true
                        : false
                }
                errorMessage={formik.errors.oldPassword}
            />
            <InputPassword
                label="Nova Senha"
                name="newPassword"
                type="password"
                placeholder="Digite sua nova senha"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.newPassword && formik.errors.newPassword
                        ? true
                        : false
                }
                errorMessage={formik.errors.newPassword}
            />
            <ButtonNormal disabled={isFetching ? true : false}>
                {isFetching ? <Loading isFetching={isFetching} /> : "Enviar"}
            </ButtonNormal>
        </FormDefault>
    );
}
