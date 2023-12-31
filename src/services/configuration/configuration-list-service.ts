import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { ListPaginatedType } from "../../types/api-response";
import { ConfigurationType } from "../../types/service-configuration-data";
import { requestClient } from "../api/request-client";

export const handleConfigurationList = async (): Promise<APIResponse<ListPaginatedType<ConfigurationType>>> => {
    try {
        const resultReq = await requestClient<ListPaginatedType<ConfigurationType>>({
            url: endpointsApi.configuration.rest,
            method: "GET",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar configurações. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};