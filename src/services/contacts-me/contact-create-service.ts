import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { FormContactDataApiType } from "../../types/service-contacts-me-data";
import { requestClient } from "../api/request-client";

export const handleContactCreate = async (
    data: FormContactDataApiType
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.contactsMe.rest,
            method: "POST",
            authorization: getAccessToken(),
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de criar contato. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
