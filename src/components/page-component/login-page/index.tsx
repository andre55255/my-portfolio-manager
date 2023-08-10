import { FormLoginType } from "../../../types/service-login-data";
import ScreenFormLogin from "../../screen-forms/login";
import { ForgotPassword, LoginContainer, Title } from "./styled";
import { useState, useContext } from "react";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../services/account/login-service";
import { showToastError, showToastSuccess } from "../../../helpers/toast-utils";
import { routesPages } from "../../../helpers/routes-pages";
import { AuthContext } from "../../../providers/auth-provider";

export default function LoginPageComponent() {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (
        data: FormLoginType,
        formikHelpers: FormikHelpers<FormLoginType>
    ) => {
        setIsFetching(true);
        const result = await handleLogin({ data });
        setIsFetching(false);

        if (
            !result.success ||
            !result.object?.accessToken ||
            !result.object.refreshToken ||
            !login
        ) {
            showToastError({ message: result.message });
            return;
        }
        login(result.object?.accessToken, result.object?.refreshToken);
        navigate(routesPages.home);
    };

    return (
        <LoginContainer>
            <Title>Login</Title>
            <ScreenFormLogin
                isFetching={isFetching}
                handleSubmit={handleSubmit}
            />
            <ForgotPassword
                onClick={() => navigate(routesPages.forgotPassword)}
            >
                Esqueceu sua senha?
            </ForgotPassword>
        </LoginContainer>
    );
}
