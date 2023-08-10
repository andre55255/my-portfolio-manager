import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { APIResponse } from "../../types/api-response";
import { SelectObjectType } from "../../types/select-object";
import { requestClient } from "../api/request-client";

export const getPortfoliosToSelectObject = async (): Promise<APIResponse<SelectObjectType[]>> => {
    try {
        const resultReq = await requestClient<SelectObjectType[]>({
            url: endpointsApi.portfolio.getPortfoliosToSelect,
            method: "GET",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar portfolios para seleção. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
