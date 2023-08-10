import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken, getRefreshToken } from "../../helpers/function-utils";
import { APIResponse } from "../../types/api-response";
import { RefreshTokenType } from "../../types/service-login-data";
import { requestClient } from "../api/request-client";

export const handleRefreshToken = async (): Promise<
    APIResponse<RefreshTokenType>
> => {
    try {
        const resultReq = await requestClient<RefreshTokenType>({
            url: endpointsApi.account.refreshToken,
            method: "POST",
            data: {
                accessToken: getAccessToken(),
                refreshToken: getRefreshToken(),
            },
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de refresh token. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
