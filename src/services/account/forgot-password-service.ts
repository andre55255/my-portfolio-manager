import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { FormForgotPasswordType } from "../../types/service-forgot-password-data";
import { requestClient } from "../api/request-client";

type HandleForgotPassProps = {
    data: FormForgotPasswordType;
}

export const handleForgotPassword = async ({ 
    data,
}: HandleForgotPassProps): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.account.forgotPassword,
            method: "POST",
            data
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de esqueci minha senha. Desculpe-nos pelo transtorno",
            status: 500
        };
    }
}