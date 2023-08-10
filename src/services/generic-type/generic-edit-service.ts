import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { SaveGenericType } from "../../types/service-generic-type-data";
import { requestClient } from "../api/request-client";

export const handleGenericEdit = async (
    data: SaveGenericType,
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.genericType.rest + "/" + id,
            method: "PUT",
            authorization: getAccessToken(),
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de editar tipo genérico. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
