import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { ListPaginatedType } from "../../types/api-response";
import { GenericType } from "../../types/service-generic-type-data";
import { requestClient } from "../api/request-client";

export const handleGenericList = async (accessToken: string): Promise<APIResponse<ListPaginatedType<GenericType>>> => {
    try {
        const resultReq = await requestClient<ListPaginatedType<GenericType>>({
            url: endpointsApi.genericType.rest,
            method: "GET",
            authorization: accessToken,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar tipos genéricos. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};