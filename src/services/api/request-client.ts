import { APIResponse } from "./../../../../my-portfolio/src/types/api-response";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { api } from "./config-api";

type RequestProps = {
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
    url: string;
    data?: object | undefined;
    authorization?: string | undefined | null;
    query?: object;
};

export async function requestClient<T>(
    requestInfo: RequestProps
): Promise<APIResponse<T>> {
    try {
        const configRequest: AxiosRequestConfig<any> = {};
        configRequest.url = requestInfo.url;
        configRequest.method = requestInfo.method;
        configRequest.data = requestInfo.data;
        configRequest.params = requestInfo.query;
        if (requestInfo.authorization) {
            configRequest.headers = {
                Authorization: "Bearer " + requestInfo.authorization,
            };
        }
        try {
            const response = await api<APIResponse<T>>(configRequest);
            response.data.status = response.status;
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorAxios = err as AxiosError;

                let responseData: APIResponse<T> = errorAxios.response
                    ?.data as APIResponse<T>;
                if (!responseData) {
                    responseData = {
                        success: false,
                        message:
                            errorAxios.response?.status === 401
                                ? "Não autorizado, faça login novamente"
                                : errorAxios.response?.status === 403
                                ? "Acesso negado"
                                : "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno",
                    };
                }
                responseData.status = errorAxios.response?.status;
                return responseData;
            }
            throw new Error("Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno" + err);
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message:
                "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
}
