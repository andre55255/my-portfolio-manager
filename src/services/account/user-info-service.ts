import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { UserInfoType } from "../../types/user-info";
import { requestClient } from "../api/request-client";

type HandleUserInfoProps = {
    accessToken: string;
};

export const handleUserInfo = async ({
    accessToken,
}: HandleUserInfoProps): Promise<APIResponse<UserInfoType>> => {
    try {
        const resultReq = await requestClient<UserInfoType>({
            url: endpointsApi.account.userInfo,
            method: "GET",
            authorization: accessToken,
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
