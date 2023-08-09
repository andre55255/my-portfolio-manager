import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { SaveGenericType } from "../../types/service-generic-type-data";
import { requestClient } from "../api/request-client";

export const handleGenericCreate = async (
    accessToken: string,
    data: SaveGenericType
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.genericType.rest,
            method: "POST",
            authorization: accessToken,
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de criar tipo genérico. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
