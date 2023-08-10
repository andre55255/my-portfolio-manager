import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { ConfigurationSaveType } from "../../types/service-configuration-data";
import { requestClient } from "../api/request-client";

export const handleConfigurationCreate = async (
    data: ConfigurationSaveType
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.configuration.rest,
            method: "POST",
            authorization: getAccessToken(),
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de criar configuração. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
