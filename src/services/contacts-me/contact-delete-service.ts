import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { requestClient } from "../api/request-client";

export const handleContactDelete = async (
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.contactsMe.rest + "/" + id,
            method: "DELETE",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de deletar contato pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
