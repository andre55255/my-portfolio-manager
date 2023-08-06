import { APIResponse } from "./../../../my-portfolio/src/types/api-response";
import { NavigateFunction } from "react-router-dom";
import { routesPages } from "./routes-pages";
import { showToastError } from "./toast-utils";

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
        return;
    }
};

export const verifyResponseRequest = (
    result: APIResponse<any>,
    logout: () => void,
    navigate: NavigateFunction
) => {
    if (result.status === 401) {
        logout();
        navigate(routesPages.login);
    }
    if (result.status === 403) {
        navigate(routesPages.home);
    }
    if (!result.success) {
        showToastError({ message: result.message });
    }
};
