import CreateScreenComponent from "../../../create-screen";
import { useState, useContext } from "react";
import ScreenFormConfiguration from "../../../screen-forms/configuration-tokens";
import { useNavigate } from "react-router-dom";
import { ConfigurationSaveType } from "../../../../types/service-configuration-data";
import { AuthContext } from "../../../../providers/auth-provider";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../../helpers/function-utils";
import { handleConfigurationCreate } from "../../../../services/configuration/configuration-create-service";
import { showToastSuccess } from "../../../../helpers/toast-utils";
import { routesPages } from "../../../../helpers/routes-pages";

export default function ConfigurationTokenCreatePageComponent() {
    const [isFetchingSubmit, setIsFetchingSubmit] = useState<boolean>(false);

    const navigate = useNavigate();
    const { accessToken, logout } = useContext(AuthContext);

    const handleSubmit = async (values: ConfigurationSaveType) => {
        setIsFetchingSubmit(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleConfigurationCreate(
            accessToken!!,
            values
        );
        const isVerifiedReq = verifyResponseRequest(
            resultReq,
            logout!!,
            navigate
        );
        if (!isVerifiedReq) {
            setIsFetchingSubmit(false);
            return;
        }
        showToastSuccess({ message: resultReq.message });
        navigate(routesPages.configuration.list);
    };

    return (
        <CreateScreenComponent title="Criar Configuração">
            <ScreenFormConfiguration
                isFetching={isFetchingSubmit}
                handleSubmit={handleSubmit}
            />
        </CreateScreenComponent>
    );
}
