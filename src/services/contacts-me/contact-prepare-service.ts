import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { FormContactListDataApi } from "../../types/service-contacts-me-data";
import { requestClient } from "../api/request-client";

export const handleContactPrepare = async (
    id: string
): Promise<APIResponse<FormContactListDataApi>> => {
    try {
        const resultReq = await requestClient<FormContactListDataApi>({
            url: endpointsApi.contactsMe.rest + "/" + id,
            method: "GET",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar contato pelo id. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
