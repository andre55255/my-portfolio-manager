import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { APIResponse } from "../../types/api-response";
import { UserInfoType } from "../../types/user-info";
import { requestClient } from "../api/request-client";

export const handleUserInfo = async (): Promise<APIResponse<UserInfoType>> => {
    try {
        const resultReq = await requestClient<UserInfoType>({
            url: endpointsApi.account.userInfo,
            method: "GET",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de pegar dados de usuário logado. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
