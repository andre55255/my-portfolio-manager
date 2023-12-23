import { APIResponse } from "../../../../my-portfolio/src/types/api-response";
import { endpointsApi } from "../../helpers/endpoints-api";
import { getAccessToken } from "../../helpers/function-utils";
import { ListPaginatedType } from "../../types/api-response";
import { FormContactListDataApi } from "../../types/service-contacts-me-data";
import { requestClient } from "../api/request-client";

export const handleContactList = async (): Promise<APIResponse<ListPaginatedType<FormContactListDataApi>>> => {
    try {
        const resultReq = await requestClient<ListPaginatedType<FormContactListDataApi>>({
            url: endpointsApi.contactsMe.rest,
            method: "GET",
            authorization: getAccessToken(),
        });
        return resultReq;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de listar contatos. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
};