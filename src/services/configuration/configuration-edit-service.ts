import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { ConfigurationSaveType } from "../../types/service-configuration-data";
import { requestClient } from "../api/request-client";

export const handleConfigurationEdit = async (
    data: ConfigurationSaveType,
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.configuration.rest + "/" + id,
            method: "PUT",
            authorization: getAccessToken(),
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de editar configuração. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
