import { NavigateFunction } from "react-router-dom";
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN, COOKIE_USER_DATA } from "./constants";
import { routesPages } from "./routes-pages";

type navigateTreatmentType = {
    status: number | undefined;
    navigate: NavigateFunction;
    removeCookie: Function;
};

export const navigateTreatment = ({
    status,
    navigate,
    removeCookie,
}: navigateTreatmentType) => {
    if (status === 401) {
        removeCookie(COOKIE_ACCESS_TOKEN);
        removeCookie(COOKIE_REFRESH_TOKEN);
        removeCookie(COOKIE_USER_DATA);
        navigate(routesPages.main);
        return;
    }
    if (status === 403) {
        navigate(routesPages.main);
        return;
    }
};