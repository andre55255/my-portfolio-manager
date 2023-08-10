import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { requestClient } from "../api/request-client";

export const handleGenericDelete = async (
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.genericType.rest + "/" + id,
            method: "DELETE",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de deletar tipo genérico pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
