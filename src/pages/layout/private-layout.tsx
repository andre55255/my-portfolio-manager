import React, { useContext, useEffect } from "react";
import PrivateLayoutPage from "../../components/private-layout";
import { UserInfoContext } from "../../providers/user-info-provider";
import { handleUserInfo } from "../../services/account/user-info-service";
import { AuthContext } from "../../providers/auth-provider";
import { useNavigate } from "react-router-dom";
import { verifyResponseRequest } from "../../helpers/function-utils";

type AuxProps = {
    children: React.ReactNode;
};

export default function PrivateLayout({ children }: AuxProps) {
    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);
    const { setUserInfo } = useContext(UserInfoContext);

    const getUserInfo = async () => {
        const result = await handleUserInfo();
        verifyResponseRequest(result, logout!!, navigate);
        setUserInfo!!(result.object);
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
