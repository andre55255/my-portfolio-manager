import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { ConfigurationSaveType } from "../../types/service-configuration-data";
import { requestClient } from "../api/request-client";

export const handleConfigurationPrepare = async (
    accessToken: string,
    id: string
): Promise<APIResponse<ConfigurationSaveType>> => {
    try {
        const resultReq = await requestClient<ConfigurationSaveType>({
            url: endpointsApi.configuration.rest + "/" + id,
            method: "GET",
            authorization: accessToken,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar configuração pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
