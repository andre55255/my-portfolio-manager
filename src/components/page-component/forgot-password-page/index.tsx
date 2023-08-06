import { routesPages } from "../../../helpers/routes-pages";
import { showToastError, showToastSuccess } from "../../../helpers/toast-utils";
import { FormForgotPasswordType } from "../../../types/service-forgot-password-data";
import ScreenFormForgotPassword from "../../screen-forms/forgot-password";
import { ForgotPassword, LoginContainer, Title } from "../login-page/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { handleForgotPassword } from "../../../services/account/forgot-password-service";

export default function ForgotPasswordPageComponent() {
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (
        data: FormForgotPasswordType,
        formikHelpers: FormikHelpers<FormForgotPasswordType>
    ) => {
        setIsFetching(true);
        const result = await handleForgotPassword({ data });
        setIsFetching(false);

        if (!result.success) {
            showToastError({ message: result.message });
            return;
        }
        showToastSuccess({ message: result.message });
        navigate(routesPages.login);
    };

    return (
        <LoginContainer>
            <Title>Esqueceu sua senha?</Title>
            <ScreenFormForgotPassword
                isFetching={isFetching}
                handleSubmit={handleSubmit}
            />
            <ForgotPassword onClick={() => navigate(routesPages.login)}>
                Voltar para Login
            </ForgotPassword>
        </LoginContainer>
    );
}
