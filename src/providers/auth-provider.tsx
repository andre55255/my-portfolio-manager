import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIE_ACCESS_TOKEN } from "../helpers/constants";
import { routesPages } from "../helpers/routes-pages";

type AuthContextProps = {
    accessToken?: string | undefined;
    login?: Function | undefined;
    logout?: Function | undefined;
}

export const AuthContext = createContext<AuthContextProps>({  });

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [cookies, setCookies, removeCookie] = useCookies([COOKIE_ACCESS_TOKEN]);
    const navigate = useNavigate();

    const login = async (accessToken: string) => {
        setCookies(COOKIE_ACCESS_TOKEN, accessToken);
        navigate(routesPages.home);
    }

    const logout = () => {
        removeCookie(COOKIE_ACCESS_TOKEN);
        navigate(routesPages.login);
    }

    const value = useMemo(
        () => ({
            accessToken: cookies[COOKIE_ACCESS_TOKEN] || undefined,
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