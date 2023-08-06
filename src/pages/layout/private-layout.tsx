import React, { useContext, useEffect } from "react";
import PrivateLayoutPage from "../../components/private-layout";
import { UserInfoContext } from "../../providers/user-info-provider";
import { handleUserInfo } from "../../services/account/user-info-service";
import { AuthContext } from "../../providers/auth-provider";
import { showToastError } from "../../helpers/toast-utils";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routes-pages";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../helpers/function-utils";

type AuxProps = {
    children: React.ReactNode;
};

export default function PrivateLayout({ children }: AuxProps) {
    const navigate = useNavigate();
    const { accessToken, logout } = useContext(AuthContext);
    const { setUserInfo } = useContext(UserInfoContext);

    const getUserInfo = async () => {
        validAccessToken(logout!!, navigate, accessToken);
        
        const result = await handleUserInfo({ accessToken: accessToken!! });

        verifyResponseRequest(result, logout!!, navigate);
        setUserInfo && setUserInfo(result.object);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <>
            <PrivateLayoutPage>{children}</PrivateLayoutPage>
        </>
    );
}
