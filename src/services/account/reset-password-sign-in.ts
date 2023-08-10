import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { APIResponse } from "../../types/api-response";
import { ResetPasswordSignInType } from "../../types/service-reset-password-signin-data";
import { requestClient } from "../api/request-client";

type HandleResetPassProps = {
    data: ResetPasswordSignInType;
}

export const handleResetPassword = async ({
    data,
}: HandleResetPassProps): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.account.resetPasswordSignIn,
            method: "POST",
            data,
            authorization: getAccessToken()
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de resetar senha logado. Desculpe-nos pelo transtorno",
            status: 500
        };
    }
}