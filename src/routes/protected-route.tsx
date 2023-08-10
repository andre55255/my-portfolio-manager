import PrivateLayout from "../pages/layout/private-layout";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { routesPages } from "../helpers/routes-pages";

import { useContext, useEffect } from "react";
import {
    getAccessToken,
    verifyResponseRequest,
} from "../helpers/function-utils";
import { handleRefreshToken } from "../services/account/refresh-token-service";
import { showToastError } from "../helpers/toast-utils";
import { AuthContext } from "../providers/auth-provider";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { logout, login } = useContext(AuthContext);

    const verifyAuth = () => {
        const accessToken = getAccessToken();

        if (!accessToken) {
            showToastError({ message: "Acesso negado, refaça o login" });
            return <Navigate to={routesPages.login} />;
        }
    };

    const getNewRefresh = async () => {
        try {
            const result = await handleRefreshToken();

            const isVerified = verifyResponseRequest(
                result,
                logout!!,
                navigate
            );
            if (!isVerified || !result.success || !result.object) return;

            login &&
                login(result.object.accessToken, result.object.refreshToken);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        verifyAuth();

        const intervalVerifyToken = setInterval(verifyAuth, 15000);
        const intervalNewRefresh = setInterval(getNewRefresh, 900000);

        return () => {
            clearInterval(intervalVerifyToken);
            clearInterval(intervalNewRefresh);
        };
    }, []);

    return (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    );
};
