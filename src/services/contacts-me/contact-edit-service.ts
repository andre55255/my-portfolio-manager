import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { FormContactDataApiType } from "../../types/service-contacts-me-data";
import { requestClient } from "../api/request-client";

export const handleContactEdit = async (
    data: FormContactDataApiType,
    id: string
): Promise<APIResponse<unknown>> => {
    try {
        const resultReq = await requestClient<unknown>({
            url: endpointsApi.contactsMe.rest + "/" + id,
            method: "PUT",
            authorization: getAccessToken(),
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de editar contato. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};
