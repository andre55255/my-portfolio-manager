import { createContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from "../helpers/constants";
import { routesPages } from "../helpers/routes-pages";

type AuthContextProps = {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
    login?: ((accessToken: string, refreshToken: string) => void) | undefined;
    logout?: () => void | undefined;
}

export const AuthContext = createContext<AuthContextProps>({  });

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [cookies, setCookies, removeCookie] = useCookies([COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN]);

    const login = (accessToken: string, refreshToken: string) => {
        setCookies(COOKIE_ACCESS_TOKEN, accessToken);
        setCookies(COOKIE_REFRESH_TOKEN, refreshToken);
    }

    const logout = () => {
        removeCookie(COOKIE_ACCESS_TOKEN);
        removeCookie(COOKIE_REFRESH_TOKEN);
    }

    const value = useMemo(
        () => ({
            accessToken: cookies[COOKIE_ACCESS_TOKEN] || undefined,
            refreshToken: cookies[COOKIE_REFRESH_TOKEN] || undefined,
            login,
            logout
        }),
        [cookies]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}