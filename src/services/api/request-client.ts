import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { api } from "./config-api";
import { APIResponse } from "../../types/api-response";

type RequestProps = {
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
    url: string;
    data?: object | undefined;
    authorization?: string | undefined;
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

                const responseData = errorAxios.response?.data as APIResponse<T>;
                responseData.status = errorAxios.response?.status;

                return responseData;
            }
            throw new Error("Falha inesperada ao realizar requisição" + err);
        }
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno",
            status: 500,
        };
    }
}