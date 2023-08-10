import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigurationType } from "../../../../types/service-configuration-data";
import ListScreenComponent from "../../../list-screen";
import { routesPages } from "../../../../helpers/routes-pages";
import { SelectColumnType } from "../../../../types/select-object";
import { AuthContext } from "../../../../providers/auth-provider";
import { verifyResponseRequest } from "../../../../helpers/function-utils";
import { handleConfigurationList } from "../../../../services/configuration/configuration-list-service";
import { handleConfigurationDelete } from "../../../../services/configuration/configuration-delete-service";

export default function ConfigurationTokenListPage() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [configurations, setConfigurations] = useState<ConfigurationType[]>(
        []
    );

    const handleListConfigurations = useCallback(async () => {
        setIsFetching(true);

        const resultReq = await handleConfigurationList();
        const isSuccess = verifyResponseRequest(resultReq, logout!!, navigate);
        if (!isSuccess) {
            setIsFetching(false);
            return;
        }
        setConfigurations(resultReq.object?.items || []);
        setIsFetching(false);
    }, []);

    const handleDelete = async (id: string) => {
        setIsFetching(true);

        const resultReq = await handleConfigurationDelete(id);
        const isSuccess = verifyResponseRequest(resultReq, logout!!, navigate);
        if (!isSuccess) {
            setIsFetching(false);
            return;
        }
        await handleListConfigurations();
    };

    const columns: SelectColumnType[] = [
        {
            label: "Id",
            value: "id",
            isVisible: true,
        },
        {
            label: "Token",
            value: "token",
            isVisible: true,
        },
        {
            label: "Valor",
            value: "value",
            isVisible: true,
        },
        {
            label: "Extra",
            value: "extra",
            isVisible: true,
        },
    ];

    useEffect(() => {
        handleListConfigurations();
    }, []);

    return (
        <ListScreenComponent
            title="Configurações"
            createRoute={routesPages.configuration.create}
            editRoute={routesPages.configuration.edit}
            handleDelete={handleDelete}
            isFetching={isFetching}
            columns={columns}
            data={configurations}
        />
    );
}
