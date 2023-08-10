import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { requestClient } from "../api/request-client";

export const handleConfigurationDelete = async (
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.configuration.rest + "/" + id,
            method: "DELETE",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de deletar configuração pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
