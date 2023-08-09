import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { SaveGenericType } from "../../types/service-generic-type-data";
import { requestClient } from "../api/request-client";

export const handleGenericPrepare = async (
    accessToken: string,
    id: string
): Promise<APIResponse<SaveGenericType>> => {
    try {
        const resultReq = await requestClient<SaveGenericType>({
            url: endpointsApi.genericType.rest + "/" + id,
            method: "GET",
            authorization: accessToken,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar tipo genérico pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
