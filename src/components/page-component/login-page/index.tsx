import { FormLoginType } from "../../../types/service-login-data";
import ScreenFormLogin from "../../screen-forms/login";
import { ForgotPassword, LoginContainer, Title } from "./styled";
import { useState } from "react";
import { FormikHelpers } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN, COOKIE_USER_DATA } from "../../../helpers/constants";
import { handleLogin } from "../../../services/account/login-service";
import { showToastError, showToastSuccess } from "../../../helpers/toast-utils";
import { routesPages } from "../../../helpers/routes-pages";

export default function LoginPageComponent() {
    const [cookies, setCookie, removeCookie] = useCookies([
        COOKIE_ACCESS_TOKEN,
        COOKIE_REFRESH_TOKEN,
        COOKIE_USER_DATA,
    ]);
    
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (
        data: FormLoginType,
        formikHelpers: FormikHelpers<FormLoginType>
    ) => {
        setIsFetching(true);
        const result = await handleLogin({ data, setCookie });
        setIsFetching(false);
        
        if (!result.success) {
            showToastError({ message: result.message });
            return;
        }
        showToastSuccess({ message: result.message });
        navigate(routesPages.home);
    };

    return (
        <LoginContainer>
            <Title>Login</Title>
            <ScreenFormLogin
                isFetching={isFetching}
                handleSubmit={handleSubmit}
            />
            <ForgotPassword onClick={() => navigate(routesPages.forgotPassword)}>Esqueceu sua senha?</ForgotPassword>
        </LoginContainer>
    );
}
