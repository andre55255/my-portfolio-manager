import { NavigateFunction } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { routesPages } from "./routes-pages";

type navigateTreatmentType = {
    status: number | undefined;
    navigate: NavigateFunction;
};

export const navigateTreatment = ({
    status,
    navigate,
}: navigateTreatmentType) => {
    if (status === 401) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate(routesPages.login);
        return;
    }
    if (status === 403) {
        navigate(routesPages.home);
        return;
    }
};