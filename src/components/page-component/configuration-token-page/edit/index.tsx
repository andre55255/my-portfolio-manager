import CreateScreenComponent from "../../../create-screen";
import { useState, useContext, useEffect, useCallback } from "react";
import ScreenFormConfiguration from "../../../screen-forms/configuration-tokens";
import { useNavigate, useParams } from "react-router-dom";
import {
    ConfigurationSaveType,
    ConfigurationType,
} from "../../../../types/service-configuration-data";
import { AuthContext } from "../../../../providers/auth-provider";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../../helpers/function-utils";
import { showToastSuccess } from "../../../../helpers/toast-utils";
import { routesPages } from "../../../../helpers/routes-pages";
import { handleConfigurationEdit } from "../../../../services/configuration/configuration-edit-service";
import { handleConfigurationPrepare } from "../../../../services/configuration/configuration-prepare-service";

export default function ConfigurationTokenEditPageComponent() {
    const [isFetchingPage, setIsFetchingPage] = useState<boolean>(false);
    const [isFetchingSubmit, setIsFetchingSubmit] = useState<boolean>(false);
    const [configuration, setConfiguration] = useState<ConfigurationSaveType>();

    const navigate = useNavigate();
    const { id } = useParams();
    const { accessToken, logout } = useContext(AuthContext);

    const handleSubmit = async (values: ConfigurationSaveType) => {
        setIsFetchingSubmit(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleConfigurationEdit(
            accessToken!!,
            values,
            id || "0"
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

    const handlePrepare = useCallback(async () => {
        setIsFetchingPage(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleConfigurationPrepare(
            accessToken!!,
            id || "0"
        );
        const isVerifiedReq = verifyResponseRequest(
            resultReq,
            logout!!,
            navigate
        );
        if (!isVerifiedReq) {
            setIsFetchingPage(false);
            return;
        }
        setConfiguration(resultReq.object);
        setIsFetchingPage(false);
    }, []);

    useEffect(() => {
        handlePrepare();
    }, []);

    return (
        <CreateScreenComponent
            isFetchingPage={isFetchingPage}
            title="Editar Configuração"
        >
            <ScreenFormConfiguration
                isFetching={isFetchingSubmit}
                handleSubmit={handleSubmit}
                values={configuration}
            />
        </CreateScreenComponent>
    );
}
