import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { requestClient } from "../api/request-client";

export const handleSetSelectedPortfolio = async (
    accessToken: string,
    portfolioId: number
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.account.setSelectedPortfolio,
            method: "POST",
            authorization: accessToken,
            data: {
                portfolioId,
            },
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de setar portfolio. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
