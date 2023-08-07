import ScreenFormResetPasswordSignIn from "../../screen-forms/reset-password-sign-in";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/auth-provider";
import { ResetPasswordSignInType } from "../../../types/service-reset-password-signin-data";
import { ContainerResetPassword, TitleResetPassword } from "./styled";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../helpers/function-utils";
import { handleResetPassword } from "../../../services/account/reset-password-sign-in";
import { showToastSuccess } from "../../../helpers/toast-utils";
import { routesPages } from "../../../helpers/routes-pages";

export default function ResetPasswordSignInPageComponent() {
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const { accessToken, logout } = useContext(AuthContext);

    const handleSubmit = async (data: ResetPasswordSignInType) => {
        setIsFetching(true);
        validAccessToken(logout!!, navigate, accessToken);

        const result = await handleResetPassword({
            accessToken: accessToken!!,
            data,
        });
        setIsFetching(false);
        
        const resultVerified = verifyResponseRequest(result, logout!!, navigate);
        if (resultVerified) {
            showToastSuccess({
                message:
                    "Senha redefinida com sucesso, refaça o login com a nova senha",
            });
            navigate(routesPages.login);
        }
    };

    return (
        <ContainerResetPassword>
            <TitleResetPassword>Edite sua senha</TitleResetPassword>
            <ScreenFormResetPasswordSignIn
                isFetching={isFetching}
                handleSubmit={handleSubmit}
            />
        </ContainerResetPassword>
    );
}
