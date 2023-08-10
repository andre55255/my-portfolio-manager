import { APIResponse } from "./../../../my-portfolio/src/types/api-response";
import { NavigateFunction } from "react-router-dom";
import { routesPages } from "./routes-pages";
import { showToastError } from "./toast-utils";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

export const convertToBase64 = (
    file: File
): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

export const validAccessToken = (
    logout: () => void,
    navigate: NavigateFunction,
    accessToken?: string
) => {
    if (!accessToken) {
        showToastError({ message: "Acesso negado, faça login" });
        logout();
        navigate(routesPages.login);
        return false;
    }
    return true;
};

export const verifyResponseRequest = (
    result: APIResponse<any>,
    logout: () => void,
    navigate: NavigateFunction
) => {
    if (result.status === 401) {
        logout();
        navigate(routesPages.login);
        return false;
    }
    if (result.status === 403) {
        navigate(routesPages.home);
        return false;
    }
    if (!result.success) {
        showToastError({ message: result.message });
        return false;
    }
    return true;
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);