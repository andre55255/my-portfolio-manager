import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN, COOKIE_USER_DATA } from "../../helpers/constants";
import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { FormLoginType, LoginResponseType } from "../../types/service-login-data"
import { requestClient } from "../api/request-client";

type HandleLoginProps = {
    data: FormLoginType;
    setCookie: Function;
}

export const handleLogin = async ({ 
    data,
    setCookie
}: HandleLoginProps): Promise<APIResponse<LoginResponseType>> => {
    try {
        const resultReq = await requestClient<LoginResponseType>({
            url: endpointsApi.account.login,
            method: "POST",
            data
        });

        if (!resultReq.success) {
            return resultReq;
        }
        
        setCookie(COOKIE_ACCESS_TOKEN, resultReq.object?.accessToken);
        setCookie(COOKIE_REFRESH_TOKEN, resultReq.object?.refreshToken);
        setCookie(COOKIE_USER_DATA, resultReq.object?.user);

        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de login. Desculpe-nos pelo transtorno",
            status: 500
        };
    }
}