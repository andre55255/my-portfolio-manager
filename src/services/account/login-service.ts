import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import {
    FormLoginType,
    LoginResponseType,
} from "../../types/service-login-data";
import { requestClient } from "../api/request-client";

type HandleLoginProps = {
    data: FormLoginType;
};

export const handleLogin = async ({
    data,
}: HandleLoginProps): Promise<APIResponse<LoginResponseType>> => {
    try {
        const resultReq = await requestClient<LoginResponseType>({
            url: endpointsApi.account.login,
            method: "POST",
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de login. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
